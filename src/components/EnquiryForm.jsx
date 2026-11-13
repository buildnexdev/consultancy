import React, { useState, useEffect, useMemo } from 'react';
import { 
  Send, CheckCircle2, AlertCircle, Loader2, User, Phone, Mail, 
  MapPin, Award, BookOpen, Layers, Building, MessageSquare, Shield 
} from 'lucide-react';
import { 
  COLLEGES_DATA, 
  getAllDistricts, 
  getAllDegrees, 
  getBranchesForDegree,
  getFilteredCollegesForSelect,
  CONSULTANCY_INFO 
} from '../data/colleges';

export default function EnquiryForm({ 
  initialCollege = null, 
  initialDegree = '', 
  initialBranch = '',
  onSuccess = null,
  isModal = false,
  title = "Get Free Admission Guidance",
  subtitle = "Fill in your details below. Our senior academic counselor will call you within 15 minutes."
}) {
  const allDistricts = useMemo(() => getAllDistricts(), []);
  const allDegrees = useMemo(() => getAllDegrees(), []);

  // Form state
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [cutoffMarks, setCutoffMarks] = useState('');
  const [preferredDistrict, setPreferredDistrict] = useState(initialCollege?.district || '');
  const [preferredDegree, setPreferredDegree] = useState(initialDegree || (allDegrees[0] || 'B.Tech / B.E.'));
  const [preferredBranch, setPreferredBranch] = useState(initialBranch || '');
  const [selectedColleges, setSelectedColleges] = useState(initialCollege ? [initialCollege.name] : []);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam hidden field

  // Status & Validation states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize when initial props change (e.g. user clicks another college's Apply button)
  useEffect(() => {
    if (initialCollege) {
      setSelectedColleges([initialCollege.name]);
      if (initialCollege.district) setPreferredDistrict(initialCollege.district);
    }
  }, [initialCollege]);

  // Dynamic branches dependent on chosen degree
  const availableBranches = useMemo(() => {
    return getBranchesForDegree(preferredDegree);
  }, [preferredDegree]);

  // Dynamic colleges available for multi-select, filtered by degree & district
  const availableColleges = useMemo(() => {
    return getFilteredCollegesForSelect({
      degree: preferredDegree,
      district: preferredDistrict
    });
  }, [preferredDegree, preferredDistrict]);

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!studentName.trim()) {
      newErrors.studentName = 'Student name is required.';
    }

    // 10-digit Indian mobile validation
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot spam check
    if (honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Formspree endpoint from env or fallback
    const formspreeId = 
      import.meta.env.VITE_FORMSPREE_ID || 
      (typeof process !== 'undefined' && process.env?.REACT_APP_FORMSPREE_ID) || 
      'mppdwdly';

    const formspreeUrl = formspreeId.startsWith('http') 
      ? formspreeId 
      : `https://formspree.io/f/${formspreeId}`;

    const payload = {
      _subject: `New Admission Enquiry – ${studentName} (${preferredDegree || 'Degree'})`,
      _replyto: email || undefined,
      "Student Name": studentName,
      "Parent / Guardian Name": parentName || 'Not specified',
      "Phone Number": phone,
      "Email Address": email || 'Not specified',
      "Current City / District": currentCity || 'Not specified',
      "12th Marks / Cut-off": cutoffMarks || 'Not specified',
      "Preferred Degree / Course": preferredDegree,
      "Preferred Branch / Specialization": preferredBranch || 'Any branch',
      "Preferred District": preferredDistrict || 'Any district',
      "Preferred College(s)": selectedColleges.length > 0 ? selectedColleges.join(', ') : 'Open to suggestions',
      "Student Message / Notes": message || 'None',
      "Submission Date": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      // Raw fields for backend API
      studentName,
      phone,
      email,
      cutoffMarks,
      course: preferredDegree,
      specialization: preferredBranch,
      collegeName: selectedColleges.join(', '),
      preferredCity: preferredDistrict || currentCity,
      notes: message
    };

    let sent = false;

    // 1. Send to Formspree
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        sent = true;
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.warn('Formspree returned error:', errorData);
      }
    } catch (err) {
      console.warn('Formspree submission error:', err);
    }

    // 2. Also record in local MAMP backup api/submit-lead.php
    try {
      await fetch('./api/submit-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      sent = true;
    } catch (err) {
      // Ignore if local api unavailable
    }

    setIsSubmitting(false);

    if (sent) {
      setSubmitStatus('success');
      if (onSuccess) onSuccess();
    } else {
      setSubmitStatus('error');
      setErrorMessage('We could not send your enquiry due to a network issue. Please check your connection or contact our team directly.');
    }
  };

  const handleReset = () => {
    setStudentName('');
    setParentName('');
    setPhone('');
    setEmail('');
    setCurrentCity('');
    setCutoffMarks('');
    setPreferredDistrict('');
    setPreferredDegree(allDegrees[0] || 'B.Tech / B.E.');
    setPreferredBranch('');
    setSelectedColleges([]);
    setMessage('');
    setSubmitStatus(null);
    setErrors({});
  };

  // SUCCESS SCREEN
  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 text-center space-y-4 border border-emerald-100 shadow-sm animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Enquiry Received Successfully!
        </h3>

        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-900">{studentName}</strong>. Your enquiry has been sent to our admissions team. An academic counselor will contact you at <strong className="text-blue-900">{phone}</strong> shortly with complete fee structures, cut-offs, and seat options.
        </p>

        {/* Summary Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
          <div className="font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1">
            Application Summary
          </div>
          <div><strong>Student:</strong> {studentName}</div>
          <div><strong>Course:</strong> {preferredDegree} {preferredBranch ? `(${preferredBranch})` : ''}</div>
          <div><strong>Preferred District:</strong> {preferredDistrict || 'Any'}</div>
          <div><strong>Target College(s):</strong> {selectedColleges.length > 0 ? selectedColleges.join(', ') : 'Open to counselor recommendation'}</div>
        </div>

        <div className="pt-2">
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
      
      {/* Title & Subtitle */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Hidden honeypot field for bot protection */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Student Name & Parent Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Student Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. Arun Kumar"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                if (errors.studentName) setErrors({ ...errors, studentName: null });
              }}
              className={`w-full bg-white border ${errors.studentName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
          </div>
          {errors.studentName && (
            <p className="text-[11px] text-red-600 mt-1">{errors.studentName}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Parent / Guardian Name <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Sundaram"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Student / Parent Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400">
              +91
            </span>
            <input
              type="tel"
              maxLength="10"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, '');
                setPhone(val);
                if (errors.phone) setErrors({ ...errors, phone: null });
              }}
              className={`w-full bg-white border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-xl pl-12 pr-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            placeholder="student@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            className={`w-full bg-white border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 3: Current City & 12th Cut-off */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Current City / Native District
          </label>
          <input
            type="text"
            placeholder="e.g. Trichy, Madurai, Salem..."
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            12th Marks / TNEA Cut-off Mark
          </label>
          <input
            type="text"
            placeholder="e.g. 175 / 200 or 88%"
            value={cutoffMarks}
            onChange={(e) => setCutoffMarks(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Row 4: Preferred Course/Degree & Preferred Branch (Dependent Dropdown) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Degree / Course <span className="text-red-500">*</span>
          </label>
          <select
            value={preferredDegree}
            onChange={(e) => {
              setPreferredDegree(e.target.value);
              setPreferredBranch(''); // Reset branch when course changes
            }}
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {allDegrees.map((deg, i) => (
              <option key={i} value={deg}>{deg}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Branch / Specialization
          </label>
          <select
            value={preferredBranch}
            onChange={(e) => setPreferredBranch(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Any / Open to Suggestions</option>
            {availableBranches.map((br, i) => (
              <option key={i} value={br}>{br}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Preferred District & Preferred College(s) Multi-Select */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred College District
          </label>
          <select
            value={preferredDistrict}
            onChange={(e) => setPreferredDistrict(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Any District in Tamil Nadu</option>
            {allDistricts.map((dist, i) => (
              <option key={i} value={dist}>{dist}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Target College(s) Preference
          </label>
          <select
            value={selectedColleges[0] || ''}
            onChange={(e) => {
              const val = e.target.value;
              setSelectedColleges(val ? [val] : []);
            }}
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Open to Recommended Colleges</option>
            {availableColleges.map((col) => (
              <option key={col.id} value={col.name}>
                {col.name} ({col.district})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Message / Specific Requirements */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Specific Requirements or Questions <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows="2"
          placeholder="e.g. Inquiring about scholarship eligibility, hostel facilities, or management seat fee..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Details to Admissions Team...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit for Free Admission Guidance</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <Shield className="w-3.5 h-3.5 text-emerald-600" />
        <span>100% genuine guidance. Your details are strictly confidential.</span>
      </div>

    </form>
  );
}

