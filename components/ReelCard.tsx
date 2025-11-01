import React from 'react';
import { HeartIcon, ChatBubbleIcon, ShareIcon } from './icons/AppIcons';

interface Reel {
  id: number;
  user: string;
  avatar: string;
  videoUrl: string;
}

interface ReelCardProps {
  reel: Reel;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel }) => {
  return (
    <div className="relative w-full aspect-[9/16] rounded-2xl shadow-lg overflow-hidden snap-start">
      {/* Video/Image Background */}
      <img src={reel.videoUrl} alt={`Reel by ${reel.user}`} className="w-full h-full object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between items-end">
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <img src={reel.avatar} alt={reel.user} className="w-10 h-10 rounded-full border-2 border-white" />
          <div>
            <p className="font-semibold">{reel.user}</p>
            <p className="text-xs">Follow</p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="absolute right-2 bottom-4 flex flex-col space-y-4">
        <button className="text-white">
          <HeartIcon className="w-7 h-7" />
          <span className="text-xs">1.2k</span>
        </button>
        <button className="text-white">
          <ChatBubbleIcon className="w-7 h-7" />
          <span className="text-xs">345</span>
        </button>
        <button className="text-white">
          <ShareIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default ReelCard;
