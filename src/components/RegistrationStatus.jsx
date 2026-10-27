import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Printer, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  User, 
  GraduationCap, 
  Hash, 
  Mail, 
  Layers, 
  Clock, 
  AlertCircle,
  RotateCcw,
  Download
} from 'lucide-react';

export default function RegistrationStatus({ initialLookupId, onNewRegistrationClick }) {
  const [lookupId, setLookupId] = useState(initialLookupId || '');
  const [currentRecord, setCurrentRecord] = useState(null);
  const [lookupError, setLookupError] = useState('');
  const [recentRecords, setRecentRecords] = useState([]);

  // Load records from localStorage
  const loadStoredRecords = () => {
    try {
      const dataStr = localStorage.getItem('apex_exam_registrations');
      if (dataStr) {
        const records = JSON.parse(dataStr);
        setRecentRecords(records);
        return records;
      }
    } catch (e) {
      console.error('Failed to read from localStorage:', e);
    }
    return [];
  };

  useEffect(() => {
    const records = loadStoredRecords();
    if (initialLookupId) {
      const found = records.find(r => r.id.toLowerCase() === initialLookupId.trim().toLowerCase());
      if (found) {
        setCurrentRecord(found);
        setLookupError('');
      } else {
        setLookupError(`No demo registration found with ID "${initialLookupId}".`);
      }
    } else if (records.length > 0 && !currentRecord) {
      // Default to the most recent record if available
      setCurrentRecord(records[0]);
      setLookupId(records[0].id);
    }
  }, [initialLookupId]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!lookupId.trim()) {
      setLookupError('Please enter a Registration ID to search.');
      return;
    }

    const records = loadStoredRecords();
    const cleanQuery = lookupId.trim().toLowerCase();
    const found = records.find(r => r.id.toLowerCase() === cleanQuery || r.registerNumber.toLowerCase() === cleanQuery);

    if (found) {
      setCurrentRecord(found);
      setLookupError('');
    } else {
      setCurrentRecord(null);
      setLookupError(`No demo record found matching "${lookupId}". Please check the ID or submit a new registration.`);
    }
  };

  const handleSelectRecent = (rec) => {
    setLookupId(rec.id);
    setCurrentRecord(rec);
    setLookupError('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="status-section" id="status" aria-labelledby="status-title">
      <div className="container">
        
        {/* Lookup Card */}
        <div className="status-lookup-card no-print">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-pill">Status Verification</span>
            <h2 id="status-title" className="section-title">Track Registration Status</h2>
            <p className="section-subtitle">
              Verify your end-semester examination enrollment status and download your official acknowledgement receipt.
            </p>
          </div>

          <form onSubmit={handleSearch}>
            <div className="lookup-input-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter Demo Registration ID (e.g., REG-2025-4921) or Roll No."
                value={lookupId}
                onChange={(e) => {
                  setLookupId(e.target.value);
                  if (lookupError) setLookupError('');
                }}
                style={{ fontSize: '1rem', padding: '0.85rem 1.25rem' }}
                aria-label="Registration ID or Register Number"
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ flexShrink: 0, padding: '0.85rem 1.75rem' }}
              >
                <Search size={18} /> Search Status
              </button>
            </div>
          </form>

          {lookupError && (
            <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', backgroundColor: '#FDF2F0', border: '1px solid #F5C6CB', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B93826', fontSize: '0.9rem' }}>
              <AlertCircle size={16} />
              <span>{lookupError}</span>
            </div>
          )}

          {/* Quick Select from Saved Records */}
          {recentRecords.length > 0 && (
            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #E5D5C1' }}>
              <span style={{ fontSize: '0.8rem', color: '#6E5B50', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Stored Demo Registrations in Browser:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {recentRecords.map(rec => (
                  <button
                    key={rec.id}
                    type="button"
                    onClick={() => handleSelectRecent(rec)}
                    style={{
                      background: currentRecord?.id === rec.id ? '#8B5E3C' : '#FAF4EC',
                      color: currentRecord?.id === rec.id ? '#FFF' : '#3E2C23',
                      border: '1px solid #D8C3A5',
                      borderRadius: '9999px',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{rec.id}</span>
                    <span style={{ opacity: 0.75 }}>({rec.fullName.split(' ')[0]})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Detailed Registration Slip */}
        {currentRecord ? (
          <div className="registration-slip animate-fade-in" id="print-slip">
            
            {/* Action Bar */}
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed #D8C3A5' }}>
              <span style={{ fontSize: '0.88rem', color: '#6E5B50' }}>
                Displaying official demo examination enrollment acknowledgement.
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handlePrint}
                >
                  <Printer size={15} /> Print / Download Slip
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={onNewRegistrationClick}
                >
                  Register Another
                </button>
              </div>
            </div>

            {/* Slip Header */}
            <div className="slip-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: '#8B5E3C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#3E2C23' }}>
                    Apex Institute of Technology
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#6E5B50' }}>
                    Controller of Examinations • End-Semester Registration Slip
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div className="slip-badge-status">
                  <CheckCircle2 size={16} /> {currentRecord.status || 'Verified & Confirmed'}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9B887C', marginTop: '0.35rem' }}>
                  Recorded on: {currentRecord.submittedAt}
                </div>
              </div>
            </div>

            {/* Candidate & Academic Details Grid */}
            <div className="slip-details-grid">
              <div className="slip-field-item">
                <span className="slip-field-label">Demo Registration ID</span>
                <span className="slip-field-value highlight-id">{currentRecord.id}</span>
              </div>

              <div className="slip-field-item">
                <span className="slip-field-label">Student Full Name</span>
                <span className="slip-field-value">{currentRecord.fullName}</span>
              </div>

              <div className="slip-field-item">
                <span className="slip-field-label">University Register No.</span>
                <span className="slip-field-value">{currentRecord.registerNumber}</span>
              </div>

              <div className="slip-field-item">
                <span className="slip-field-label">Institutional Email</span>
                <span className="slip-field-value">{currentRecord.email}</span>
              </div>

              <div className="slip-field-item">
                <span className="slip-field-label">Programme / Degree</span>
                <span className="slip-field-value">{currentRecord.courseName}</span>
              </div>

              <div className="slip-field-item">
                <span className="slip-field-label">Academic Semester & Session</span>
                <span className="slip-field-value">
                  Semester {currentRecord.semester} • {currentRecord.academicYear}
                </span>
              </div>
            </div>

            {/* Registered Subjects Table */}
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#3E2C23', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <FileText size={18} color="#8B5E3C" /> Registered Courses & Examination Papers
              </h4>

              <table className="slip-table" aria-label="Registered Subjects">
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Course Title</th>
                    <th>Type</th>
                    <th>Credits</th>
                    <th style={{ textAlign: 'right' }}>Subject Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecord.subjects.map((sub, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: 600 }}>{sub.code}</td>
                      <td>{sub.name}</td>
                      <td>
                        <span className={`badge-tag ${sub.type === 'Theory' ? 'badge-theory' : 'badge-practical'}`}>
                          {sub.type}
                        </span>
                      </td>
                      <td>{sub.credits}</td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>₹{sub.fee.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Fee Breakdown Summary */}
            <div style={{ backgroundColor: '#FAF4EC', padding: '1.25rem 1.5rem', borderRadius: '12px', marginTop: '1.5rem', border: '1px solid #E5D5C1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', color: '#6E5B50' }}>
                <span>Subject Papers Total ({currentRecord.subjects.length} subjects, {currentRecord.totalCredits} credits)</span>
                <span>₹{(currentRecord.feeSummary?.theoryFee + currentRecord.feeSummary?.practicalFee).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', color: '#6E5B50' }}>
                <span>Marksheet & Administrative Verification Fee</span>
                <span>₹{(currentRecord.feeSummary?.marksheetFee + currentRecord.feeSummary?.processingFee).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #D8C3A5', fontSize: '1.15rem', fontWeight: 700, color: '#3E2C23' }}>
                <span>Total Amount Paid (Demo Simulated)</span>
                <span style={{ color: '#8B5E3C' }}>₹{currentRecord.feeSummary?.totalFee.toLocaleString()}</span>
              </div>
            </div>

            {/* Verification Watermark & Note */}
            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px dashed #D8C3A5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', color: '#9B887C' }}>
              <div>
                <strong>Security Stamp:</strong> DIGI-EXAM-AUTH-2025-V2 • System Generated Acknowledgement
              </div>
              <div>
                <strong>Notice:</strong> Hall ticket download will be enabled 5 days prior to commencement.
              </div>
            </div>

          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', backgroundColor: '#FFFCF7', border: '1px dashed #D8C3A5', borderRadius: '18px', maxWidth: '640px', margin: '0 auto' }}>
            <FileText size={48} color="#D8C3A5" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#3E2C23' }}>No Registration Loaded</h3>
            <p style={{ color: '#6E5B50', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Submit an end-semester registration form or look up an existing demo registration ID to view and print the acknowledgement slip.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onNewRegistrationClick}
            >
              Fill Registration Form
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
