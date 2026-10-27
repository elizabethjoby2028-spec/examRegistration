import React from 'react';
import { UserCheck, CheckSquare, FileCheck2 } from 'lucide-react';

export default function RegistrationProcess() {
  const steps = [
    {
      number: '01',
      title: 'Student Details & Programme',
      desc: 'Enter your university register number, verify course details, semester and contact email.',
      icon: UserCheck
    },
    {
      number: '02',
      title: 'Select Examination Subjects',
      desc: 'Select your registered theory courses and practical lab subjects. Fees are computed dynamically in real time.',
      icon: CheckSquare
    },
    {
      number: '03',
      title: 'Verify & Receive Slip',
      desc: 'Confirm the academic declaration, submit your form, and instantly receive your demo registration ID & printable slip.',
      icon: FileCheck2
    }
  ];

  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">How It Works</span>
          <h2 id="process-title" className="section-title">Three Simple Steps to Register</h2>
          <p className="section-subtitle">
            Follow the streamlined procedure to complete your semester end examination enrollment without hassle.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="step-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div className="step-number">{step.number}</div>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#FAF4EC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8B5E3C'
                  }}>
                    <Icon size={20} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
