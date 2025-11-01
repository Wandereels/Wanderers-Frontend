import React from 'react';
import { HeartIcon, ChatBubbleIcon } from '../components/icons/AppIcons';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

interface RegionCommunityPageProps {
  region: {
    name: string;
  } | null;
}

const posts = [
    { user: 'TravelBug', avatar: 'https://i.pravatar.cc/40?img=20', title: 'My amazing trek to Triund!', content: 'Just came back from the most breathtaking trek. The views were unreal and the experience was unforgettable. Happy to share tips!' },
    { user: 'HikerLife', avatar: 'https://i.pravatar.cc/40?img=21', title: 'Best cafes to work from in Manali?', content: 'Looking for recommendations for cafes with good wifi and even better coffee. Any digital nomads here?' },
    { user: 'FoodExplorer', avatar: 'https://i.pravatar.cc/40?img=22', title: 'Must-try local dishes in Rishikesh', content: 'I am a huge foodie and want to explore the local cuisine. What are the absolute must-try dishes and where can I find them?' },
];

const PostCard: React.FC<{ post: typeof posts[0] }> = ({ post }) => (
    <Card>
        <div className="flex items-center space-x-3 mb-4">
            <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-semibold text-gray-800">{post.user}</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.content}</p>
        <div className="flex items-center space-x-6 text-gray-500">
            <button className="flex items-center space-x-1 hover:text-red-500">
                <HeartIcon className="w-5 h-5" />
                <span className="text-sm">12</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
                <ChatBubbleIcon className="w-5 h-5" />
                <span className="text-sm">5</span>
            </button>
        </div>
    </Card>
);

const RegionCommunityPage: React.FC<RegionCommunityPageProps> = ({ region }) => {
 if (!region) {
    return (
        <div className="flex items-center justify-center h-full">
            <p>No region selected. Please go back.</p>
        </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
        <PageHeader 
            title={`Welcome to the ${region.name} Community`}
            subtitle="Share your stories, ask questions, and connect with fellow travelers."
        >
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Join Community
            </button>
        </PageHeader>
        <div className="space-y-6">
            {posts.map((post, index) => <PostCard key={index} post={post} />)}
        </div>
    </div>
  );
};

export default RegionCommunityPage;