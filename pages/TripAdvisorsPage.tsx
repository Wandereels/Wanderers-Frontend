import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

interface TripAdvisorsPageProps {
  region: {
    name: string;
  } | null;
}

const advisorsData = {
    'Himachal Pradesh': [
        { name: 'Himalayan Escapes', specialization: 'Trekking & Adventure', image: 'https://i.pravatar.cc/80?img=8' },
        { name: 'Valley Ventures', specialization: 'Cultural & Heritage Tours', image: 'https://i.pravatar.cc/80?img=9' },
        { name: 'Peak Planners', specialization: 'Luxury Stays & Retreats', image: 'https://i.pravatar.cc/80?img=10' },
    ],
    'Uttarakhand': [
        { name: 'Ganga Guides', specialization: 'Spiritual & Yoga Retreats', image: 'https://i.pravatar.cc/80?img=5' },
        { name: 'Devbhoomi Travels', specialization: 'Pilgrimage & Temple Tours', image: 'https://i.pravatar.cc/80?img=6' },
        { name: 'Mountain Movers', specialization: 'Extreme Sports & Camping', image: 'https://i.pravatar.cc/80?img=2' },
    ]
}

const TripAdvisorsPage: React.FC<TripAdvisorsPageProps> = ({ region }) => {
  if (!region) {
    return (
        <div className="flex items-center justify-center h-full">
            <p>No region selected. Please go back.</p>
        </div>
    )
  }

  const advisors = advisorsData[region.name as keyof typeof advisorsData] || [];

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader title={`Trip Advisors & Agencies in ${region.name}`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map(advisor => (
            <Card key={advisor.name} className="text-center shadow-sm">
                <img src={advisor.image} alt={advisor.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"/>
                <h2 className="text-xl font-bold text-gray-800">{advisor.name}</h2>
                <p className="text-yellow-600 font-semibold text-sm mb-3">{advisor.specialization}</p>
                <p className="text-gray-600 text-sm">
                    Providing bespoke travel experiences in the heart of {region.name}. Contact us to plan your dream journey.
                </p>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default TripAdvisorsPage;