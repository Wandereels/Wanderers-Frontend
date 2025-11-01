import React from 'react';
import ReelCard from '../components/ReelCard';

const reelsData = [
  { id: 1, user: 'mountain_escape', avatar: 'https://i.pravatar.cc/40?img=11', videoUrl: 'https://picsum.photos/seed/reels1/360/640' },
  { id: 2, user: 'urban_jungle', avatar: 'https://i.pravatar.cc/40?img=12', videoUrl: 'https://picsum.photos/seed/reels2/360/640' },
  { id: 3, user: 'coastal_vibes', avatar: 'https://i.pravatar.cc/40?img=14', videoUrl: 'https://picsum.photos/seed/reels3/360/640' },
  { id: 4, user: 'desert_dreamer', avatar: 'https://i.pravatar.cc/40?img=15', videoUrl: 'https://picsum.photos/seed/reels4/360/640' },
  { id: 5, user: 'forest_wanderer', avatar: 'https://i.pravatar.cc/40?img=16', videoUrl: 'https://picsum.photos/seed/reels5/360/640' },
  { id: 6, user: 'serene_scapes', avatar: 'https://i.pravatar.cc/40?img=17', videoUrl: 'https://picsum.photos/seed/reels6/360/640' },
];

const ExplorePage: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm space-y-8">
        {reelsData.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
        {/* Mock more data for scrolling effect */}
         {reelsData.map((reel) => (
          <ReelCard key={reel.id + 'b'} reel={{...reel, id: reel.id + 10, videoUrl: `https://picsum.photos/seed/reels${reel.id + 10}/360/640`}} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;