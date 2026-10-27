import React from 'react';
import { GraduationCap, Heart, Shield } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & About */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#8B5E3C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF'
              }}>
                <GraduationCap size={22} />
              </div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#FFFCF7' }}>
                Apex Institute of Technology
              </h4>
            </div>
            <p>
              Autonomous institution accredited with 'A++' Grade. Committed to excellence in higher engineering education, scientific inquiry, and technological innovation.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: '#D8C3A5', backgroundColor: 'rgba(216, 195, 165, 0.1)', padding: '0.4rem 0.85rem', borderRadius: '6px' }}>
              <Shield size={14} /> Demonstration Exam Portal Simulation
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                  Portal Home
                </a>
              </li>
              <li>
                <a href="#register" onClick={(e) => { e.preventDefault(); onNavigate('register'); }}>
                  Register for Exams
                </a>
              </li>
              <li>
                <a href="#status" onClick={(e) => { e.preventDefault(); onNavigate('status'); }}>
                  Registration Status
                </a>
              </li>
              <li>
                <a href="#instructions" onClick={(e) => { e.preventDefault(); onNavigate('instructions'); }}>
                  Exam Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Resources */}
          <div className="footer-col">
            <h4>Academic Cell</h4>
            <ul className="footer-links">
              <li>
                <a href="#instructions" onClick={(e) => { e.preventDefault(); onNavigate('instructions'); }}>
                  Timetable Archives (Demo)
                </a>
              </li>
              <li>
                <a href="#instructions" onClick={(e) => { e.preventDefault(); onNavigate('instructions'); }}>
                  Hall Ticket Guidelines
                </a>
              </li>
              <li>
                <a href="#instructions" onClick={(e) => { e.preventDefault(); onNavigate('instructions'); }}>
                  Revaluation Procedures
                </a>
              </li>
              <li>
                <a href="#instructions" onClick={(e) => { e.preventDefault(); onNavigate('instructions'); }}>
                  COE Contact Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Advisory */}
          <div className="footer-col">
            <h4>Demo Disclaimer</h4>
            <p style={{ fontSize: '0.82rem' }}>
              This portal is an interactive frontend application demonstration. No official registrations are submitted to any real institution, and submitted records are stored only in your browser's local storage.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Apex Institute of Technology • Office of the Controller of Examinations. All rights reserved.
          </div>
          <div>
            Built with React, Vite & Docker • Minimalist Beige-Brown Academic Theme
          </div>
        </div>
      </div>
    </footer>
  );
}
