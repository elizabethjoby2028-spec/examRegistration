import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoticeBanner from './components/NoticeBanner';
import Hero from './components/Hero';
import RegistrationProcess from './components/RegistrationProcess';
import RegistrationForm from './components/RegistrationForm';
import RegistrationStatus from './components/RegistrationStatus';
import Instructions from './components/Instructions';
import Footer from './components/Footer';
import { Info, CheckCircle2, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [recentGeneratedId, setRecentGeneratedId] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to top of main or specific element
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegistrationSuccess = (generatedId) => {
    setRecentGeneratedId(generatedId);
    triggerToast(`Application submitted successfully! Your Demo Registration ID is: ${generatedId}`);
    setActiveSection('status');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Disclaimer Top Bar */}
      <div className="demo-disclaimer-bar no-print">
        <Info size={15} />
        <span>
          <strong>Demonstration Portal:</strong> End-Semester Examination Registration System. All records are stored locally in your browser.
        </span>
      </div>

      {/* Main Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Dynamic Main Content depending on current tab */}
      <main id="main-content">
        {/* Notice Banner */}
        <NoticeBanner />

        {activeSection === 'home' && (
          <>
            <Hero 
              onRegisterClick={() => handleNavigate('register')}
              onCheckStatusClick={() => handleNavigate('status')}
            />
            <RegistrationProcess />
            <Instructions />
          </>
        )}

        {activeSection === 'register' && (
          <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
        )}

        {activeSection === 'status' && (
          <RegistrationStatus 
            initialLookupId={recentGeneratedId}
            onNewRegistrationClick={() => handleNavigate('register')}
          />
        )}

        {activeSection === 'instructions' && (
          <div style={{ paddingTop: '2rem' }}>
            <Instructions />
          </div>
        )}
      </main>

      {/* Notification Toast */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#3E2C23',
          color: '#FFFCF7',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 100,
          borderLeft: '4px solid #8B5E3C',
          maxWidth: '420px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <CheckCircle2 size={22} color="#D8C3A5" />
          <div style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
            {toastMessage}
          </div>
        </div>
      )}

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#8B5E3C',
            color: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(139, 94, 60, 0.3)',
            zIndex: 90,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#6F472B'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#8B5E3C'; }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Portal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
