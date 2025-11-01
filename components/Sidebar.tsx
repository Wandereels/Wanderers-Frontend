import React from 'react';
import { 
  HomeIcon, 
  ExploreIcon, 
  CreateCommunityIcon, 
  ManageCommunitiesIcon 
} from './icons/AppIcons';

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive?: boolean;
  onClick: () => void;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, onClick, color }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
    },
  };

  const selectedColor = colorClasses[color];

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-200 w-full text-left ${
        isActive
          ? `${selectedColor.bg} ${selectedColor.text} font-semibold`
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className={`p-1.5 rounded-md ${isActive ? 'bg-white' : selectedColor.bg}`}>
          <Icon className={`w-5 h-5 ${selectedColor.text}`} />
      </div>
      <span>{label}</span>
    </button>
  );
};

interface SidebarProps {
    currentPage: string;
    navigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, navigate }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col h-full">
      <button onClick={() => navigate('home')} className="flex items-center space-x-2 mb-10 text-left">
        <svg
          className="w-8 h-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
        </svg>
        <span className="text-2xl font-bold text-gray-800">logo</span>
      </button>

      <nav className="flex-1 space-y-2">
        <NavItem 
            icon={HomeIcon}
            color="blue"
            label="Home" 
            isActive={currentPage === 'home'}
            onClick={() => navigate('home')}
        />
        <NavItem 
            icon={ExploreIcon}
            color="green"
            label="Explore" 
            isActive={currentPage === 'explore'}
            onClick={() => navigate('explore')}
        />

        <div className="pt-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4">
            Communities
          </h3>
          <div className="mt-2 space-y-2">
            <NavItem 
                icon={CreateCommunityIcon}
                color="purple"
                label="Create Community" 
                isActive={currentPage === 'create'}
                onClick={() => navigate('create')}
            />
            <NavItem 
                icon={ManageCommunitiesIcon}
                color="orange"
                label="Manage Communities" 
                isActive={currentPage === 'manage'}
                onClick={() => navigate('manage')}
            />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;