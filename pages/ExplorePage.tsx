
import React, { useEffect, useState } from 'react';
import ReelCard from '../components/ReelCard';
import PageHeader from '../components/PageHeader';
import ReelViewer from '../components/ReelViewer';

// Define the structure of a reel (TypeScript interface)
interface Reel {
  id: number;
  user: string;
  avatar: string;
  videoUrl: string;
}

const ExplorePage: React.FC = () => {
  const [reelsData, setReelsData] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewerState, setViewerState] = useState<{isOpen: boolean, initialReelId: number | null}>({
    isOpen: false,
    initialReelId: null,
  });

  useEffect(() => {
    // Use environment variable for flexibility (dev/prod)
    const apiBaseUrl = 'https://wanderers-backend.vercel.app';

    fetch(`${apiBaseUrl}/api/reels`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch reels');
        return res.json();
      })
      .then((data) => {
        setReelsData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching reels:', err);
        setLoading(false);
      });
  }, []);

  const handleOpenViewer = (reelId: number) => {
    setViewerState({ isOpen: true, initialReelId: reelId });
  };

  const handleCloseViewer = () => {
    setViewerState({ isOpen: false, initialReelId: null });
  };


  if (loading) return <div className="flex justify-center items-center h-full text-gray-300"><p>Loading reels...</p></div>;

  return (
    <>
      <div>
        <PageHeader title="Explore Reels" subtitle="Discover the latest travel stories from our community" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {reelsData.length > 0 ? (
            reelsData.map((reel) => (
              <ReelCard key={reel.id} reel={reel} onClick={handleOpenViewer} />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center h-64">
              <p className="text-gray-400">No reels to show.</p>
            </div>
          )}
        </div>
      </div>
      {viewerState.isOpen && (
        <ReelViewer 
          reels={reelsData}
          initialReelId={viewerState.initialReelId}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
};

export default ExplorePage;