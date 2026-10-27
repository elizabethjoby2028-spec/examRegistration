import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';

export default function Header({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* College Name & Logo Placeholder */}
          <div 
            className="brand-wrapper" 
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
            aria-label="Apex Institute Home"
          >
            <div className="brand-crest" aria-hidden="true">
              <GraduationCap size={26} strokeWidth={2.2} />
            </div>
            <div className="brand-text">
              <span className="brand-title">Apex Institute of Technology</span>
              <span className="brand-subtitle">Office of the Controller of Examinations</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <button
                  type="button"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`nav-link ${activeSection === 'register' ? 'active' : ''}`}
                  onClick={() => handleNavClick('register')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Register for Exams
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`nav-link ${activeSection === 'status' ? 'active' : ''}`}
                  onClick={() => handleNavClick('status')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Registration Status
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`nav-link ${activeSection === 'instructions' ? 'active' : ''}`}
                  onClick={() => handleNavClick('instructions')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Instructions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-cta-btn"
                  onClick={() => handleNavClick('register')}
                >
                  Register Now <ArrowRight size={15} />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav open">
          <button
            type="button"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'register' ? 'active' : ''}`}
            onClick={() => handleNavClick('register')}
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            Register for Exams
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'status' ? 'active' : ''}`}
            onClick={() => handleNavClick('status')}
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            Registration Status
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'instructions' ? 'active' : ''}`}
            onClick={() => handleNavClick('instructions')}
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            Instructions & Guidelines
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
            onClick={() => handleNavClick('register')}
          >
            Register Now <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
