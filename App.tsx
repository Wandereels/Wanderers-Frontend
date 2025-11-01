import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import RegionPage from './pages/RegionPage';
import ChatPage from './pages/ChatPage';
import NotificationsPage from './pages/NotificationsPage';
import MessagesPage from './pages/MessagesPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateCommunityPage from './pages/CreateCommunityPage';
import ManageCommunitiesPage from './pages/ManageCommunitiesPage';
import TripAdvisorsPage from './pages/TripAdvisorsPage';
import RegionCommunityPage from './pages/RegionCommunityPage';

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = (newPage: string, data: any = null) => {
    if ((newPage === 'region' || newPage === 'tripAdvisors' || newPage === 'regionCommunity') && data) {
        setSelectedRegion(data);
    }
    setPage(newPage);
    setSidebarOpen(false); // Close sidebar on navigation
    setProfileDropdownOpen(false); // Close profile dropdown on navigation
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('home');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'explore':
        return <ExplorePage />;
      case 'region':
        return <RegionPage region={selectedRegion} navigate={navigate} />;
      case 'chat':
        return <ChatPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'messages':
        return <MessagesPage />;
      case 'login':
        return <LoginPage navigate={navigate} setIsAuthenticated={setIsAuthenticated} />;
      case 'signup':
        return <SignupPage navigate={navigate} />;
      case 'create':
        return <CreateCommunityPage />;
      case 'manage':
        return <ManageCommunitiesPage />;
      case 'tripAdvisors':
        return <TripAdvisorsPage region={selectedRegion} />;
      case 'regionCommunity':
        return <RegionCommunityPage region={selectedRegion} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden relative">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full z-30 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:z-auto`}>
         <Sidebar currentPage={page} navigate={navigate} />
      </div>

      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <Header 
            onMenuClick={() => setSidebarOpen(!isSidebarOpen)} 
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
            navigate={navigate}
            isProfileDropdownOpen={isProfileDropdownOpen}
            setProfileDropdownOpen={setProfileDropdownOpen}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;