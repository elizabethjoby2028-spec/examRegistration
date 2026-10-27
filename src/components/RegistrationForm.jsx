import React, { useState, useEffect } from 'react';
import { 
  Check, 
  AlertCircle, 
  CheckCircle, 
  BookOpen, 
  Sparkles, 
  Calculator, 
  HelpCircle,
  FileCheck,
  Send
} from 'lucide-react';
import { 
  COURSES, 
  ACADEMIC_YEARS, 
  EXAM_SESSIONS, 
  FEE_CONSTANTS, 
  getSubjectsForCourseAndSemester 
} from '../data/coursesAndSubjects';

export default function RegistrationForm({ onRegistrationSuccess }) {
  // Form input state
  const [formData, setFormData] = useState({
    fullName: '',
    registerNumber: '',
    email: '',
    courseId: COURSES[0].id,
    semester: 5,
    academicYear: ACADEMIC_YEARS[0],
    examSession: EXAM_SESSIONS[0],
    declarationAccepted: false
  });

  // Selected subjects state: array of subject IDs
  const [selectedSubjectIds, setSelectedSubjectIds] = useState([]);
  
  // Available subjects for chosen course & semester
  const [availableSubjects, setAvailableSubjects] = useState([]);
  
  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(null);

  // Update subjects list whenever courseId or semester changes
  useEffect(() => {
    const subjects = getSubjectsForCourseAndSemester(formData.courseId, Number(formData.semester));
    setAvailableSubjects(subjects);
    // Auto-select all core subjects initially for convenience, or preserve matching
    setSelectedSubjectIds(subjects.map(s => s.id));
  }, [formData.courseId, formData.semester]);

  // Handle standard input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Toggle single subject selection
  const handleSubjectToggle = (subjectId) => {
    setSelectedSubjectIds(prev => {
      const isSelected = prev.includes(subjectId);
      const updated = isSelected 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId];

      if (updated.length > 0 && errors.subjects) {
        setErrors(errs => {
          const next = { ...errs };
          delete next.subjects;
          return next;
        });
      }
      return updated;
    });
  };

  // Select all or deselect all subjects
  const handleSelectAll = (select) => {
    if (select) {
      setSelectedSubjectIds(availableSubjects.map(s => s.id));
      if (errors.subjects) {
        setErrors(errs => {
          const next = { ...errs };
          delete next.subjects;
          return next;
        });
      }
    } else {
      setSelectedSubjectIds([]);
    }
  };

  // Autofill sample data helper for quick testing
  const handleAutofillDemo = () => {
    setFormData({
      fullName: 'Aarav V. Sharma',
      registerNumber: '21BCS108',
      email: 'aarav.sharma@apex.edu',
      courseId: 'btech-cse',
      semester: 5,
      academicYear: '2025-2026',
      examSession: 'End-Semester Regular (Nov / Dec 2025)',
      declarationAccepted: true
    });
    setErrors({});
  };

  // Calculate dynamic fees
  const selectedSubjectsList = availableSubjects.filter(sub => selectedSubjectIds.includes(sub.id));
  const theoryFee = selectedSubjectsList
    .filter(s => s.type === 'Theory')
    .reduce((sum, s) => sum + s.fee, 0);
  const practicalFee = selectedSubjectsList
    .filter(s => s.type === 'Practical')
    .reduce((sum, s) => sum + s.fee, 0);

  const totalSubjectFee = theoryFee + practicalFee;
  const marksheetFee = selectedSubjectsList.length > 0 ? FEE_CONSTANTS.marksheetFee : 0;
  const processingFee = selectedSubjectsList.length > 0 ? FEE_CONSTANTS.processingFee : 0;
  const grandTotal = totalSubjectFee + marksheetFee + processingFee;

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters.';
    }

    if (!formData.registerNumber.trim()) {
      newErrors.registerNumber = 'University Register Number is required.';
    } else if (!/^[A-Za-z0-9]{6,14}$/.test(formData.registerNumber.trim())) {
      newErrors.registerNumber = 'Enter a valid register number (6-14 alphanumeric chars, e.g., 21BCS108).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'College email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., student@apex.edu).';
    }

    if (selectedSubjectIds.length === 0) {
      newErrors.subjects = 'Please select at least one examination subject to register.';
    }

    if (!formData.declarationAccepted) {
      newErrors.declaration = 'You must accept the academic declaration before submitting.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorElem = document.querySelector('.form-error');
      if (firstErrorElem) {
        firstErrorElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Generate unique demo registration ID: e.g. REG-2025-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const demoRegistrationId = `REG-2025-${randomSuffix}`;
    const timestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const selectedCourseObj = COURSES.find(c => c.id === formData.courseId);

    const newRecord = {
      id: demoRegistrationId,
      fullName: formData.fullName.trim(),
      registerNumber: formData.registerNumber.trim().toUpperCase(),
      email: formData.email.trim().toLowerCase(),
      courseId: formData.courseId,
      courseName: selectedCourseObj ? selectedCourseObj.name : formData.courseId,
      semester: formData.semester,
      academicYear: formData.academicYear,
      examSession: formData.examSession,
      subjects: selectedSubjectsList,
      totalCredits: selectedSubjectsList.reduce((acc, curr) => acc + curr.credits, 0),
      feeSummary: {
        theoryFee,
        practicalFee,
        marksheetFee,
        processingFee,
        totalFee: grandTotal
      },
      status: 'Submitted & Verified (Demo)',
      submittedAt: timestamp
    };

    setTimeout(() => {
      // Save to localStorage
      try {
        const existingDataStr = localStorage.getItem('apex_exam_registrations');
        const existingRecords = existingDataStr ? JSON.parse(existingDataStr) : [];
        const updatedRecords = [newRecord, ...existingRecords.filter(r => r.id !== demoRegistrationId)];
        localStorage.setItem('apex_exam_registrations', JSON.stringify(updatedRecords));
      } catch (err) {
        console.error('Error saving to localStorage:', err);
      }

      setIsSubmitting(false);
      setSuccessToast(`Registration successful! Generated Demo ID: ${demoRegistrationId}`);

      // Callback to parent to show status view
      if (onRegistrationSuccess) {
        onRegistrationSuccess(demoRegistrationId);
      }
    }, 600);
  };

  // Active course details
  const activeCourse = COURSES.find(c => c.id === formData.courseId) || COURSES[0];

  return (
    <section className="form-section" id="register" aria-labelledby="form-section-title">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Online Portal</span>
          <h2 id="form-section-title" className="section-title">End-Semester Student Registration</h2>
          <p className="section-subtitle">
            Please fill in your academic information accurately. Fields marked with an asterisk (<span style={{ color: '#B93826' }}>*</span>) are mandatory.
          </p>

          <div style={{ marginTop: '1rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleAutofillDemo}
              title="Click to quickly fill sample student information for test demonstration"
            >
              <Sparkles size={14} color="#8B5E3C" /> Fill Sample Student Data
            </button>
          </div>
        </div>

        <div className="registration-card">
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Student Basic Information */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3E2C23' }}>
                <BookOpen size={20} color="#8B5E3C" /> Student Credentials
              </h3>

              <div className="form-grid-2">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    <span>Full Name (as per University Records) <span className="required-star">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    placeholder="e.g., Aarav Sharma"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && <span className="form-error"><AlertCircle size={14} /> {errors.fullName}</span>}
                </div>

                {/* University Register Number */}
                <div className="form-group">
                  <label htmlFor="registerNumber" className="form-label">
                    <span>University Register Number <span className="required-star">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="registerNumber"
                    name="registerNumber"
                    className="form-input"
                    placeholder="e.g., 21BCS108"
                    value={formData.registerNumber}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={!!errors.registerNumber}
                  />
                  {errors.registerNumber ? (
                    <span className="form-error"><AlertCircle size={14} /> {errors.registerNumber}</span>
                  ) : (
                    <span className="form-hint">Alphanumeric roll or enrollment number</span>
                  )}
                </div>
              </div>

              <div className="form-grid-3">
                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span>College Email Address <span className="required-star">*</span></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="student@apex.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="form-error"><AlertCircle size={14} /> {errors.email}</span>}
                </div>

                {/* Course/Programme */}
                <div className="form-group">
                  <label htmlFor="courseId" className="form-label">
                    <span>Programme / Course <span className="required-star">*</span></span>
                  </label>
                  <select
                    id="courseId"
                    name="courseId"
                    className="form-select"
                    value={formData.courseId}
                    onChange={handleInputChange}
                  >
                    {COURSES.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Semester */}
                <div className="form-group">
                  <label htmlFor="semester" className="form-label">
                    <span>Semester <span className="required-star">*</span></span>
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    className="form-select"
                    value={formData.semester}
                    onChange={handleInputChange}
                  >
                    {Array.from({ length: activeCourse.totalSemesters }, (_, i) => i + 1).map(sem => (
                      <option key={sem} value={sem}>
                        Semester {sem}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                {/* Academic Year */}
                <div className="form-group">
                  <label htmlFor="academicYear" className="form-label">
                    <span>Academic Year <span className="required-star">*</span></span>
                  </label>
                  <select
                    id="academicYear"
                    name="academicYear"
                    className="form-select"
                    value={formData.academicYear}
                    onChange={handleInputChange}
                  >
                    {ACADEMIC_YEARS.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Examination Session */}
                <div className="form-group">
                  <label htmlFor="examSession" className="form-label">
                    <span>Examination Session <span className="required-star">*</span></span>
                  </label>
                  <select
                    id="examSession"
                    name="examSession"
                    className="form-select"
                    value={formData.examSession}
                    onChange={handleInputChange}
                  >
                    {EXAM_SESSIONS.map(session => (
                      <option key={session} value={session}>{session}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Selectable Examination Subjects */}
            <div className="subjects-container">
              <div className="subjects-header">
                <div>
                  <h3>Selectable Examination Subjects</h3>
                  <p style={{ fontSize: '0.86rem', color: '#6E5B50' }}>
                    Select the theory and laboratory papers you are appearing for in Semester {formData.semester}.
                  </p>
                </div>

                <div className="subjects-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleSelectAll(true)}
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleSelectAll(false)}
                  >
                    Deselect All
                  </button>
                </div>
              </div>

              {errors.subjects && (
                <div style={{ marginBottom: '1rem', padding: '0.65rem 1rem', backgroundColor: '#FDF2F0', border: '1px solid #F5C6CB', borderRadius: '8px' }}>
                  <span className="form-error"><AlertCircle size={15} /> {errors.subjects}</span>
                </div>
              )}

              <div className="subjects-list" role="group" aria-label="Examination Subjects List">
                {availableSubjects.map((subject) => {
                  const isChecked = selectedSubjectIds.includes(subject.id);
                  return (
                    <div
                      key={subject.id}
                      className={`subject-item-card ${isChecked ? 'selected' : ''}`}
                      onClick={() => handleSubjectToggle(subject.id)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          handleSubjectToggle(subject.id);
                        }
                      }}
                    >
                      <div className="subject-left">
                        <div className="custom-checkbox">
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <div className="subject-meta">
                          <span className="subject-title">
                            {subject.code} — {subject.name}
                          </span>
                          <div className="subject-subinfo">
                            <span className={`badge-tag ${subject.type === 'Theory' ? 'badge-theory' : 'badge-practical'}`}>
                              {subject.type}
                            </span>
                            <span>•</span>
                            <span>{subject.credits} Credits</span>
                          </div>
                        </div>
                      </div>

                      <div className="subject-fee">
                        ₹{subject.fee.toLocaleString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Examination Fee Summary */}
            <div className="fee-summary-card" aria-live="polite">
              <div className="fee-summary-header">
                <h4>
                  <Calculator size={18} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} color="#8B5E3C" />
                  Examination Fee Summary
                </h4>
                <span style={{ fontSize: '0.85rem', color: '#6E5B50', fontWeight: 600 }}>
                  {selectedSubjectsList.length} Subject{selectedSubjectsList.length !== 1 ? 's' : ''} Selected
                </span>
              </div>

              <div className="fee-breakdown-row">
                <span>Theory Papers Fee ({selectedSubjectsList.filter(s => s.type === 'Theory').length} papers)</span>
                <span>₹{theoryFee.toLocaleString()}</span>
              </div>

              <div className="fee-breakdown-row">
                <span>Laboratory / Practical Fee ({selectedSubjectsList.filter(s => s.type === 'Practical').length} labs)</span>
                <span>₹{practicalFee.toLocaleString()}</span>
              </div>

              <div className="fee-breakdown-row">
                <span>Marksheet & Verification Charges (Fixed)</span>
                <span>₹{marksheetFee.toLocaleString()}</span>
              </div>

              <div className="fee-breakdown-row">
                <span>Portal Processing / Administrative Fee</span>
                <span>₹{processingFee.toLocaleString()}</span>
              </div>

              <div className="fee-total-row">
                <span>Total Examination Fee Payable:</span>
                <span className="total-amount">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Declaration Checkbox */}
            <div className="declaration-wrapper">
              <input
                type="checkbox"
                id="declarationAccepted"
                name="declarationAccepted"
                className="declaration-checkbox"
                checked={formData.declarationAccepted}
                onChange={handleInputChange}
                aria-required="true"
              />
              <div>
                <label htmlFor="declarationAccepted" className="declaration-text" style={{ cursor: 'pointer', display: 'block' }}>
                  <strong>Academic Declaration:</strong> I hereby declare that all details entered above are true and complete. I confirm that I meet the minimum 75% attendance threshold, have no outstanding library or tuition fee dues, and agree to abide by the university's Examination Code of Conduct.
                </label>
                {errors.declaration && (
                  <span className="form-error" style={{ marginTop: '0.4rem' }}>
                    <AlertCircle size={14} /> {errors.declaration}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ padding: '0.9rem 2.5rem', fontSize: '1.05rem', opacity: isSubmitting ? 0.7 : 1 }}
                id="submit-registration-btn"
              >
                {isSubmitting ? (
                  <>Processing Registration...</>
                ) : (
                  <>
                    <Send size={18} /> Submit Registration
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
