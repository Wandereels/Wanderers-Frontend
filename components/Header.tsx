import React, { useState } from 'react';
import { SearchIcon, BellIcon, MessageIcon, MenuIcon, UserCircleIcon } from './icons/AppIcons';

interface HeaderProps {
    onMenuClick: () => void;
    isAuthenticated: boolean;
    onLogout: () => void;
    navigate: (page: string) => void;
    isProfileDropdownOpen: boolean;
    setProfileDropdownOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isAuthenticated, onLogout, navigate, isProfileDropdownOpen, setProfileDropdownOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sticky top-0 z-20">
      <div className="flex justify-between items-center">
        {/* Left section: Hamburger Menu (mobile) and spacing */}
        <div className="flex items-center">
            <button onClick={onMenuClick} className="md:hidden text-gray-500 mr-4">
                <MenuIcon className="w-6 h-6" />
            </button>
        </div>

        {/* Center section: Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search content globally..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        {/* Right section: Icons and Avatar */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button className="text-gray-500 hover:text-gray-800" onClick={() => navigate('notifications')}>
            <BellIcon className="w-6 h-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-800" onClick={() => navigate('messages')}>
            <MessageIcon className="w-6 h-6" />
          </button>
          
          <div className="relative">
            <button onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}>
              {isAuthenticated ? (
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
              ) : (
                <UserCircleIcon className="w-10 h-10 text-gray-400" />
              )}
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                {isAuthenticated ? (
                  <>
                    <button onClick={() => navigate('profile')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">My Profile</button>
                    <button onClick={onLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => navigate('login')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Login</button>
                    <button onClick={() => navigate('signup')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Sign Up</button>
                  </>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;