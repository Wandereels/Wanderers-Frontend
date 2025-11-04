
import React, { useState, useEffect, useRef } from 'react';
import { HeartIcon, ChatBubbleIcon, ShareIcon, VolumeUpIcon, VolumeOffIcon, CloseIcon } from './icons/AppIcons';

interface Reel {
  id: number;
  user: string;
  avatar: string;
  videoUrl: string;
}

interface ReelViewerProps {
  reels: Reel[];
  initialReelId: number | null;
  onClose: () => void;
}
const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;
const ReelViewer: React.FC<ReelViewerProps> = ({ reels, initialReelId, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Use string keys to accommodate cloned elements for infinite scroll
  const reelRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const videoRefs = useRef<Map<string, HTMLVideoElement | null>>(new Map());
  
  const isTeleporting = useRef(false);
  
  // Create a new array for infinite scroll by cloning the first and last items
  const loopedReels = reels.length > 1 ? [reels[reels.length - 1], ...reels, reels[0]] : reels;

  const getReelKey = (reel: Reel, index: number): string => {
    if (reels.length <= 1) return String(reel.id);
    if (index === 0) return `clone-start-${reel.id}`;
    if (index === loopedReels.length - 1) return `clone-end-${reel.id}`;
    return String(reel.id);
  };

  // Scroll to the initially selected reel on mount
  useEffect(() => {
    if (initialReelId) {
      const node = reelRefs.current.get(String(initialReelId));
      // Use timeout to ensure the DOM is ready for scrolling, especially with clones
      setTimeout(() => {
         node?.scrollIntoView({ behavior: 'auto' });
      }, 0);
    }
  }, [initialReelId]);

  // Handle play/pause on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const videoElement = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                // This error is expected when a user scrolls quickly, interrupting the play request.
                // We can safely ignore 'AbortError'.
                if (error.name !== 'AbortError') {
                  console.error("Autoplay failed:", error);
                }
              });
            }
          } else {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset video on scroll away
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    );

    const currentVideoRefs = videoRefs.current;
    currentVideoRefs.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      currentVideoRefs.forEach(video => {
        if (video) observer.unobserve(video);
      });
    };
  }, [loopedReels]); // Rerun when loopedReels change

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle the infinite scroll logic
  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleScroll = () => {
      if (isTeleporting.current || !scroller || reels.length <= 1) return;

      const { scrollTop, scrollHeight, clientHeight } = scroller;
      const isAtBottom = scrollTop >= scrollHeight - clientHeight - 1; // -1 for float precision
      const isAtTop = scrollTop <= 1; // 1 for float precision

      if (isAtBottom) {
        isTeleporting.current = true;
        const firstReelId = reels[0].id;
        const targetNode = reelRefs.current.get(String(firstReelId));
        targetNode?.scrollIntoView({ behavior: 'auto' });
        setTimeout(() => { isTeleporting.current = false; }, 50);
      } else if (isAtTop) {
        isTeleporting.current = true;
        const lastReelId = reels[reels.length - 1].id;
        const targetNode = reelRefs.current.get(String(lastReelId));
        targetNode?.scrollIntoView({ behavior: 'auto' });
        setTimeout(() => { isTeleporting.current = false; }, 50);
      }
    };

    scroller?.addEventListener('scroll', handleScroll);
    return () => scroller?.removeEventListener('scroll', handleScroll);

  }, [reels]);


  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-50" aria-label="Close reel viewer">
        <CloseIcon className="w-8 h-8" />
      </button>

      <div
        ref={scrollerRef}
        className="w-full h-full overflow-y-auto snap-y snap-mandatory"
      >
        {loopedReels.map((reel, index) => {
          const reelKey = getReelKey(reel, index);
          return (
            <div
              key={reelKey}
              ref={el => { reelRefs.current.set(reelKey, el); }}
              className="w-full h-full snap-start flex items-center justify-center relative"
              aria-label={`Viewing reel by ${reel.user}`}
              role="region"
            >
              <div className="relative w-full h-full max-w-[400px] max-h-[85vh] aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
                <video
                  ref={el => { videoRefs.current.set(reelKey, el); }}
                  src={`${apiBaseUrl}${reel.videoUrl}`}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  onClick={() => setIsMuted(prev => !prev)}
                  onEnded={(e) => {
                    const playPromise = e.currentTarget.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(error => {
                        if (error.name !== 'AbortError') {
                          console.error("Manual loop replay failed:", error);
                        }
                      });
                    }
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                {/* Mute Button in video */}
                <div className="absolute top-4 left-4">
                  <button onClick={() => setIsMuted(prev => !prev)} className="bg-black/50 p-2 rounded-full text-white" aria-label={isMuted ? "Unmute video" : "Mute video"}>
                    {isMuted ? <VolumeOffIcon className="w-5 h-5" /> : <VolumeUpIcon className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* User Info & Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white pointer-events-none">
                  <div className="flex items-end">
                      {/* Left side: user info */}
                      <div className="flex-1">
                          <div className="flex items-center space-x-3">
                              <img src={reel.avatar} alt={reel.user} className="w-10 h-10 rounded-full border-2 border-white"/>
                              <p className="font-bold">{reel.user}</p>
                          </div>
                          <p className="text-sm mt-2">A beautiful journey through the mountains! #travel #adventure</p>
                      </div>

                      {/* Right side: actions */}
                      <div className="flex flex-col items-center space-y-4 pointer-events-auto">
                          <button className="flex flex-col items-center space-y-1" aria-label="Like reel">
                              <HeartIcon className="w-8 h-8" />
                              <span className="text-xs">1.2k</span>
                          </button>
                          <button className="flex flex-col items-center space-y-1" aria-label="Comment on reel">
                              <ChatBubbleIcon className="w-8 h-8" />
                              <span className="text-xs">345</span>
                          </button>
                           <button className="flex flex-col items-center space-y-1" aria-label="Share reel">
                              <ShareIcon className="w-8 h-8" />
                              <span className="text-xs">Share</span>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReelViewer;
