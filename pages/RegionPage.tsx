import React from 'react';
import { ExternalLinkIcon } from '../components/icons/AppIcons';
import TalkToAIButton from '../components/TalkToAIButton';
import Card from '../components/Card';

interface RegionPageProps {
  region: {
    name: string;
    description: string;
    image: string;
  } | null;
  navigate: (page: string, data?: any) => void;
}

const RegionPage: React.FC<RegionPageProps> = ({ region, navigate }) => {
  if (!region) {
    return (
        <div className="flex items-center justify-center h-full">
            <p>No region selected. Please go back to the homepage.</p>
        </div>
    )
  }

  return (
    <div className="space-y-12">
      <section className="relative h-64 rounded-xl overflow-hidden -mt-8 -mx-8">
          <img src={region.image} alt={region.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <h1 className="text-4xl font-extrabold">{region.name}</h1>
            <p className="mt-2 text-lg">{region.description}</p>
          </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Community Post */}
        <Card as="button" onClick={() => navigate('regionCommunity', region)}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Explore Community Post</h3>
                <ExternalLinkIcon className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex items-center space-x-3 mb-3">
                <img src="https://i.pravatar.cc/40?img=1" alt="Alice Johnson" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold">Alice Johnson</p>
                </div>
            </div>
            <h4 className="font-semibold text-yellow-600 mb-2">Hidden Gems of Kyoto: A Week of Culture and Cuisine</h4>
            <p className="text-gray-600 text-sm">
                Just returned from an unforgettable trip to Kyoto! Discovered some incredible tea houses off the beaten path and a street food market that was pure magic. The...
            </p>
        </Card>

        {/* Trip Advisors */}
        <Card as="button" onClick={() => navigate('tripAdvisors', region)} className="text-center">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Explore Trip Advisors and Agents</h3>
                <ExternalLinkIcon className="w-5 h-5 text-gray-500" />
            </div>
            <img src="https://i.pravatar.cc/80?img=7" alt="Sophia Martinez" className="w-20 h-20 rounded-full mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Sophia Martinez</h4>
            <p className="text-sm text-gray-500 mb-3">Global Travel Advisor</p>
            <p className="text-sm text-yellow-700 italic">
                Specializing in adventure travel and bespoke itineraries. From Amazon rainforest treks to Arctic expeditions.
            </p>
        </Card>
      </section>

      <TalkToAIButton onClick={() => navigate('chat')} />
    </div>
  );
};

export default RegionPage;