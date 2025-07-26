import React, { useState } from 'react';
import { Menu, X, User, Calendar, MessageCircle, LogIn, LogOut, Heart, Users, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  user?: any;
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
}

export default function Header({ currentPage, onPageChange, user, onLogin, onSignup, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Assessment with NESTY', id: 'assessment', icon: MessageCircle },
    { name: 'Find Professionals', id: 'professionals', icon: User },
    { name: 'About Us', id: 'about', icon: Users },
    { name: 'Our Mission', id: 'mission', icon: Heart },
  ];

  const loggedInNavigation = [
    { name: 'My Bookings', id: 'bookings', icon: Calendar },
    ...(user?.role === 'parent' ? [
      { name: 'Kids Profile', id: 'kids-profile', icon: Users }
    ] : []),
    ...(user?.role === 'professional' ? [
      { name: 'My Services', id: 'my-services', icon: User },
      { name: 'My Clients', id: 'my-clients', icon: Users }
    ] : [])
  ];
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onPageChange('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src="/icon.svg" alt="BukNEST Logo" className="w-8 h-8" />
            <img src="/logo-name.svg" alt="BukNEST" className="ml-2 h-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Main Navigation - Always visible */}
            {navigation.map((item) => {
             // Hide About Us and Our Mission when user is signed in
             if (user && (item.id === 'about' || item.id === 'mission')) {
               return null;
             }
             
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </button>
              );
            })}
            
            {/* Logged-in only navigation */}
            {user && loggedInNavigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={user.avatar || 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                  />
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </button>
                
                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar || 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 font-sans">{user.name}</p>
                          <p className="text-sm text-gray-600 capitalize font-sans">{user.role}</p>
                          <p className="text-xs text-gray-500 font-sans">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <button
                        onClick={() => {
                          onPageChange(user.role === 'parent' ? 'parent-dashboard' : user.role === 'professional' ? 'professional-dashboard' : 'admin-dashboard');
                          setIsUserDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-sans"
                      >
                        <User className="h-4 w-4 mr-3" />
                        Dashboard
                      </button>
                      
                     {user.role === 'professional' && (
                       <button
                         onClick={() => {
                           onPageChange('my-profile');
                           setIsUserDropdownOpen(false);
                         }}
                         className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-sans"
                       >
                         <User className="h-4 w-4 mr-3" />
                         My Profile
                       </button>
                     )}
                     
                      {user.role === 'parent' && (
                        <button
                          onClick={() => {
                            onPageChange('bookings');
                            setIsUserDropdownOpen(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-sans"
                        >
                          <Calendar className="h-4 w-4 mr-3" />
                          My Bookings
                        </button>
                      )}
                      
                      <button
                        onClick={() => {
                          onPageChange('assessment');
                          setIsUserDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-sans"
                      >
                        <MessageCircle className="h-4 w-4 mr-3" />
                        Chat with NESTY
                      </button>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={() => {
                          onLogout();
                          setIsUserDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-sans"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-3">
                <button
                  onClick={onLogin}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-green-500 text-white rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </button>
                <button
                  onClick={onSignup}
                  className="flex items-center px-4 py-2 bg-white bg-opacity-80 border-2 border-green-300 text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 font-handwritten"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Main Navigation - Always visible */}
              {navigation.map((item) => {
               // Hide About Us and Our Mission when user is signed in
               if (user && (item.id === 'about' || item.id === 'mission')) {
                 return null;
               }
               
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </button>
                );
              })}
              
              {/* Logged-in only navigation */}
              {user && loggedInNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </button>
                );
              })}
              
              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                {user ? (
                  <>
                    <div className="flex items-center px-3 py-2 mb-2">
                      <img
                        src={user.avatar || 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600 capitalize">{user.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={onLogout}
                      className="flex items-center w-full px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        onLogin();
                        setIsMenuOpen(false);
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-base font-bold text-white bg-gradient-to-r from-pink-400 to-green-500 hover:from-pink-500 hover:to-green-600 rounded-2xl font-handwritten"
                    >
                      <LogIn className="h-5 w-5 mr-3" />
                      Login
                    </button>
                    <button
                      onClick={() => {
                        onSignup();
                        setIsMenuOpen(false);
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-base font-bold text-green-700 bg-white border-2 border-green-300 hover:bg-green-50 rounded-2xl font-handwritten"
                    >
                      <User className="h-5 w-5 mr-3" />
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {isUserDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsUserDropdownOpen(false)}
        />
      )}
    </header>
  );
}