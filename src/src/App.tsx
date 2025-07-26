import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import HomePage from './components/HomePage';
import AIAssessment from './components/AIAssessment';
import AboutPage from './components/AboutPage';
import MissionPage from './components/MissionPage';
import ProfessionalsPage from './components/ProfessionalsPage';
import BookingsPage from './components/BookingsPage';
import SignupPage from './components/SignupPage';
import ParentDashboard from './components/dashboards/ParentDashboard';
import ProfessionalDashboard from './components/dashboards/ProfessionalDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import MyServicesPage from './components/MyServicesPage';
import MyClientsPage from './components/MyClientsPage.tsx';
import MyProfilePage from './components/MyProfilePage';
import KidsProfilePage from './components/KidsProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<any>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginModalMode, setLoginModalMode] = useState<'login' | 'signup'>('login');

  const handleLogin = (userData: any) => {
    setUser(userData);
    // Redirect to appropriate dashboard based on user role
    if (userData.role === 'parent') {
      setCurrentPage('parent-dashboard');
    } else if (userData.role === 'professional') {
      setCurrentPage('professional-dashboard');
    } else if (userData.role === 'admin') {
      setCurrentPage('admin-dashboard');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleShowLogin = () => {
    setLoginModalMode('login');
    setShowLoginModal(true);
  };

  const handleShowSignup = () => {
    setCurrentPage('signup');
  };

  const renderPage = () => {
    // If user is logged in, show their dashboard by default
    if (user && currentPage === 'home') {
      if (user.role === 'parent') {
        return <ParentDashboard user={user} onPageChange={setCurrentPage} />;
      } else if (user.role === 'professional') {
        return <ProfessionalDashboard user={user} onPageChange={setCurrentPage} />;
      } else if (user.role === 'admin') {
        return <AdminDashboard user={user} onPageChange={setCurrentPage} />;
      }
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'assessment':
        return <AIAssessment onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'mission':
        return <MissionPage onPageChange={setCurrentPage} />;
      case 'professionals':
        return <ProfessionalsPage onPageChange={setCurrentPage} user={user} onLogin={handleShowLogin} />;
      case 'bookings':
        return <BookingsPage onPageChange={setCurrentPage} user={user} />;
      case 'signup':
        return <SignupPage onPageChange={setCurrentPage} onSignup={handleLogin} />;
      case 'parent-dashboard':
        return <ParentDashboard user={user} onPageChange={setCurrentPage} />;
      case 'professional-dashboard':
        return <ProfessionalDashboard user={user} onPageChange={setCurrentPage} />;
      case 'admin-dashboard':
        return <AdminDashboard user={user} onPageChange={setCurrentPage} />;
      case 'my-services':
        return <MyServicesPage user={user} onPageChange={setCurrentPage} />;
      case 'my-clients':
        return <MyClientsPage user={user} onPageChange={setCurrentPage} />;
     case 'my-profile':
       return <MyProfilePage user={user} onPageChange={setCurrentPage} />;
      case 'kids-profile':
        return <KidsProfilePage user={user} onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        user={user}
        onLogin={handleShowLogin}
        onSignup={handleShowSignup}
        onLogout={handleLogout}
      />
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
        initialMode={loginModalMode}
      />
      {renderPage()}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
