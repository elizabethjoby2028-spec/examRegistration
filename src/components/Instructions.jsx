import React from 'react';
import { 
  FileCheck, 
  AlertTriangle, 
  Calendar, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  CreditCard 
} from 'lucide-react';

export default function Instructions() {
  return (
    <section className="instructions-section" id="instructions" aria-labelledby="instructions-title">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Academic Guidelines</span>
          <h2 id="instructions-title" className="section-title">Examination Rules & Instructions</h2>
          <p className="section-subtitle">
            Read through the eligibility criteria, submission deadlines, and regulations before submitting your exam registration.
          </p>
        </div>

        <div className="instructions-grid">
          {/* Left Column: Guidelines Accordions */}
          <div className="guideline-accordion">
            
            <div className="guideline-item">
              <h4>
                <ShieldCheck size={20} color="#8B5E3C" /> 1. Minimum Attendance & Eligibility Criteria
              </h4>
              <p>
                Candidates must possess a minimum of 75% aggregate attendance in each individual course to be eligible to appear for the end-semester examinations. Condonation up to 10% (between 65% and 74%) may only be granted by the Academic Council on medical or exceptional grounds with valid documentary evidence.
              </p>
            </div>

            <div className="guideline-item">
              <h4>
                <Calendar size={20} color="#8B5E3C" /> 2. Registration Timelines & Deadlines (Demo Schedule)
              </h4>
              <p>
                Regular examination registration without penalty closes promptly on <strong>November 15, 2025 at 11:59 PM</strong>. Registrations between November 16 and November 20 will incur a standard supplementary late processing penalty of ₹500. No applications will be entertained thereafter under any circumstances.
              </p>
            </div>

            <div className="guideline-item">
              <h4>
                <FileCheck size={20} color="#8B5E3C" /> 3. Verification of Course Codes and Credits
              </h4>
              <p>
                Ensure you accurately select the correct core and elective course codes. Submitting an application with mismatched elective modules will result in examination hall ticket rejection. If you notice any discrepancy in your assigned courses, report to your department head immediately before submitting.
              </p>
            </div>

            <div className="guideline-item">
              <h4>
                <CreditCard size={20} color="#8B5E3C" /> 4. Examination Fees & Payment Clearance
              </h4>
              <p>
                The fee structure comprises individual theory course fees (₹350 - ₹400), practical lab fees (₹450 - ₹500), grade card charges (₹150), and processing fee (₹100). All fees are simulated demonstration amounts. In production, payments are cleared via official campus payment gateways.
              </p>
            </div>

            <div className="guideline-item">
              <h4>
                <AlertTriangle size={20} color="#8B5E3C" /> 5. Examination Code of Conduct & Prohibited Articles
              </h4>
              <p>
                Candidates are strictly forbidden from bringing programmable calculators, smart watches, mobile devices, study sheets, or unauthorised electronic media into the examination hall. Violations will result in immediate disqualification and disciplinary action by the Malpractices Inquiry Committee.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Support Card */}
          <div>
            <div className="contact-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#3E2C23' }}>
                Examination Support & Helpdesk
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#6E5B50', lineHeight: 1.6 }}>
                Have questions regarding elective subject selection, payment reconciliation, or portal access? Contact the university examination division.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3E2C23' }}>Physical Office</h5>
                  <p style={{ fontSize: '0.82rem', color: '#6E5B50' }}>
                    Room 204, Administrative Block, Apex Academic Campus, Tech Corridor.
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3E2C23' }}>Official Email</h5>
                  <p style={{ fontSize: '0.82rem', color: '#6E5B50' }}>
                    <a href="mailto:coe-exams@apex.edu" style={{ color: '#8B5E3C', textDecoration: 'underline' }}>coe-exams@apex.edu</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3E2C23' }}>Helpdesk Telephone</h5>
                  <p style={{ fontSize: '0.82rem', color: '#6E5B50' }}>
                    +91 (080) 4567-8900 / 8901 (Ext: 204)
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3E2C23' }}>Working Hours</h5>
                  <p style={{ fontSize: '0.82rem', color: '#6E5B50' }}>
                    Monday to Friday: 9:00 AM – 5:00 PM IST<br />
                    Saturday: 9:00 AM – 1:00 PM IST
                  </p>
                </div>
              </div>

              {/* Disclaimer Callout Box */}
              <div style={{
                marginTop: '1.75rem',
                backgroundColor: '#FAF4EC',
                border: '1.5px dashed #D8C3A5',
                borderRadius: '10px',
                padding: '1rem',
                fontSize: '0.8rem',
                color: '#6E5B50'
              }}>
                <strong style={{ color: '#8B5E3C', display: 'block', marginBottom: '0.25rem' }}>
                  Educational Demonstration Notice:
                </strong>
                This website is a demonstration portal created for user interface and academic workflow prototyping. Do not submit actual confidential personal or payment data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
