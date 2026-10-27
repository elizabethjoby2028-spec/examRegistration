import React from 'react';
import { ArrowRight, Search, CheckCircle2, Clock, CalendarDays, ShieldAlert } from 'lucide-react';

export default function Hero({ onRegisterClick, onCheckStatusClick }) {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Heading and CTA */}
          <div className="animate-fade-in">
            <div className="hero-pill-badge">
              <span className="pulse-dot"></span>
              Academic Session 2025–2026 | Portal Open
            </div>
            
            <h1 className="hero-title">
              End-Semester <span>Examination</span> Registration
            </h1>

            <p className="hero-desc">
              Welcome to the official online registration portal for undergraduate and postgraduate end-semester examinations. Please verify your course credentials, select your eligible theory and practical courses, and complete your registration before the deadline.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onRegisterClick}
                id="hero-register-btn"
              >
                Register Now <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCheckStatusClick}
                id="hero-status-btn"
              >
                <Search size={16} /> Track Registration Status
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="stat-value">Nov 15</span>
                <span className="stat-label">Regular Deadline</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-value">5 Courses</span>
                <span className="stat-label">Programmes Open</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-value">100% Online</span>
                <span className="stat-label">Paperless Submission</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portal Information Card */}
          <div className="animate-fade-in animate-delay-1">
            <div className="hero-card">
              <div className="hero-card-header">
                <h3 className="hero-card-title">
                  <CalendarDays size={20} color="#8B5E3C" /> Key Examination Timeline
                </h3>
                <span className="badge-tag" style={{ backgroundColor: '#FAF4EC', color: '#8B5E3C', border: '1px solid #D8C3A5' }}>
                  Demo Schedule
                </span>
              </div>

              <div className="hero-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Clock size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Online Registration Window</h4>
                    <p>October 25 – November 15, 2025 (Without late fee)</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <ShieldAlert size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Late Registration Window</h4>
                    <p>November 16 – November 20, 2025 (Late fee applies)</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Hall Ticket Release</h4>
                    <p>Available for download starting November 25, 2025</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <CalendarDays size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Commencement of Theory Examinations</h4>
                    <p>Monday, December 01, 2025 onwards</p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '1.75rem',
                padding: '0.85rem 1rem',
                backgroundColor: '#F9F4EC',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: '#6E5B50',
                borderLeft: '3px solid #8B5E3C',
                lineHeight: 1.5
              }}>
                <strong>Demonstration Note:</strong> All dates, subject codes, and fees shown are simulated for this web application demonstration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
