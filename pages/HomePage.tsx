import React from 'react';
import TalkToAIButton from '../components/TalkToAIButton';
import PageHeader from '../components/PageHeader';
import { PopularIcon, TravelIcon, LocalGuidesIcon, FoodIcon } from '../components/icons/AppIcons';
import Card from '../components/Card';

interface HomePageProps {
  navigate: (page: string, data?: any) => void;
}

const trendingTopics = [
    { name: 'Trending Reels', description: 'Watch the latest travel reels from the community.', icon: <PopularIcon className="w-8 h-8 text-red-500" />, page: 'explore' },
    { name: 'Travel Guides', description: 'In-depth guides for your next destination.', icon: <TravelIcon className="w-8 h-8 text-blue-500" />, page: 'guides' },
    { name: 'Local Guides', description: 'Connect with verified local guides for an authentic experience.', icon: <LocalGuidesIcon className="w-8 h-8 text-green-500" />, page: 'local-guides' },
    { name: 'Food Trails', description: 'Discover the best culinary experiences on your travels.', icon: <FoodIcon className="w-8 h-8 text-yellow-500" />, page: 'food' },
];

const regionData = [
  { name: 'Himachal Pradesh', description: 'Explore the serene valleys and majestic peaks of the Himalayas.', image: 'https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' },
  { name: 'Uttarakhand', description: "Discover spiritual towns and stunning natural beauty in the 'Land of the Gods'.", image: 'https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' },
];

const RegionCard: React.FC<{ region: typeof regionData[0]; onClick: () => void }> = ({ region, onClick }) => (
    <button onClick={onClick} className="relative rounded-xl p-6 overflow-hidden flex flex-col justify-end min-h-[160px] text-left hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-100/50">
        <img src={region.image} alt={region.name} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10">
            <h3 className="font-bold text-xl text-gray-800">{region.name}</h3>
            <p className="text-gray-600 mt-1">{region.description}</p>
        </div>
    </button>
);
const TopicCard: React.FC<{ topic: typeof trendingTopics[0]; onClick: () => void }> = ({ topic, onClick }) => (
    <Card as="button" onClick={onClick} className="text-left p-4 flex items-start space-x-4">
        <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg">
            {topic.icon}
        </div>
        <div>
            <h3 className="font-bold text-gray-800">{topic.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{topic.description}</p>
        </div>
    </Card>
);



const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-12">
    <section>
        <PageHeader title="Explore Regions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {regionData.map((region) => (
            <RegionCard key={region.name} region={region} onClick={() => navigate('region', region)} />
          ))}
        </div>
      </section>
       <section>
        <PageHeader title="Trending Topics" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingTopics.map((topic) => (
                <TopicCard key={topic.name} topic={topic} onClick={() => navigate(topic.page)} />
            ))}
        </div>
      </section>

      

      <TalkToAIButton onClick={() => navigate('chat')} />
    </div>
  );
};

export default HomePage;