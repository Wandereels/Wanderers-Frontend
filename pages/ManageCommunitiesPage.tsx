import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const managedCommunities = [
    { name: 'Uttarakhand Trekkers', members: '1.2k members', avatar: 'https://picsum.photos/seed/comm1/40/40' },
    { name: 'Himalayan Foodies', members: '560 members', avatar: 'https://picsum.photos/seed/comm2/40/40' },
];

const joinedCommunities = [
    { name: 'Solo Travelers India', members: '15k members', avatar: 'https://picsum.photos/seed/comm3/40/40' },
    { name: 'Digital Nomads Hub', members: '8.7k members', avatar: 'https://picsum.photos/seed/comm4/40/40' },
    { name: 'Weekend Getaways Delhi', members: '4.1k members', avatar: 'https://picsum.photos/seed/comm5/40/40' },
]

const CommunityCard: React.FC<{ community: { name: string; members: string; avatar: string } }> = ({ community }) => (
    <Card className="p-4 flex items-center space-x-4">
        <img src={community.avatar} alt={community.name} className="w-12 h-12 rounded-full"/>
        <div>
            <h3 className="font-semibold text-gray-800">{community.name}</h3>
            <p className="text-sm text-gray-500">{community.members}</p>
        </div>
    </Card>
);


const ManageCommunitiesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
        <section>
            <PageHeader title="Communities you manage" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {managedCommunities.map(c => <CommunityCard key={c.name} community={c} />)}
            </div>
        </section>
        
        <section>
            <PageHeader title="Communities you've joined" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {joinedCommunities.map(c => <CommunityCard key={c.name} community={c} />)}
            </div>
        </section>

    </div>
  );
};

export default ManageCommunitiesPage;