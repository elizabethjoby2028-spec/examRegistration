import React from 'react';
import { AlertCircle, Calendar, FileText, Bell } from 'lucide-react';

export default function NoticeBanner() {
  return (
    <aside aria-label="Important Notices and Deadlines" style={{ backgroundColor: '#FAF4EC', borderBottom: '1px solid #E5D5C1', padding: '0.85rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#8B5E3C',
              color: '#FFFFFF',
              padding: '0.2rem 0.65rem',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <Bell size={12} /> Notice
            </span>
            <span style={{ fontSize: '0.88rem', color: '#3E2C23', fontWeight: 500 }}>
              End-Semester Winter 2025 regular registrations close on <strong>15th November 2025</strong> (Demo Schedule)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem', color: '#6E5B50' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} color="#8B5E3C" /> Exams Commence: Dec 01, 2025
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <FileText size={14} color="#8B5E3C" /> Hall Tickets: Nov 25, 2025
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
