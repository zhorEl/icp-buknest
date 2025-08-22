import React from 'react';
import { useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LoginModal from './components/LoginModal.tsx';
import HomePage from './components/HomePage.tsx';
import AIAssessment from './components/AIAssessment.tsx';
import AboutPage from './components/AboutPage.tsx';
import MissionPage from './components/MissionPage.tsx';
import ProfessionalsPage from './components/ProfessionalsPage.tsx';
import BookingsPage from './components/BookingsPage.tsx';
import SignupPage from './components/SignupPage.tsx';
import ParentDashboard from './components/dashboards/ParentDashboard.tsx';
import ProfessionalDashboard from './components/dashboards/ProfessionalDashboard.tsx';
import AdminDashboard from './components/dashboards/AdminDashboard.tsx';
import MyServicesPage from './components/MyServicesPage.tsx';
import MyClientsPage from './components/MyClientsPage.tsx';
import MyProfilePage from './components/MyProfilePage.tsx';
import KidsProfilePage from './components/KidsProfilePage.tsx';
import FloatingNestyChat from './components/FloatingNestyChat';

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
      <FloatingNestyChat />
    </div>
  );
}

export default App;
