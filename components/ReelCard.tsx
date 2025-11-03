
import React, { useRef } from 'react';

interface Reel {
  id: number;
  user: string;
  avatar: string;
  videoUrl: string;
}

interface ReelCardProps {
  reel: Reel;
  onClick: (id: number) => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel, onClick }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative aspect-[9/16] rounded-lg shadow-lg overflow-hidden bg-gray-900 group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(reel.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(reel.id)}
      aria-label={`View reel by ${reel.user}`}
    >
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-3 text-white flex items-center space-x-2">
        <img
          src={reel.avatar}
          alt={reel.user}
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        <p className="font-semibold text-sm truncate">{reel.user}</p>
      </div>
    </div>
  );
};

export default ReelCard;