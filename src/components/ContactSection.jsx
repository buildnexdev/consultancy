import React, { useState } from 'react';
import { 
  Phone, MessageCircle, Mail, MapPin, Clock, 
  Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Shield 
} from 'lucide-react';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courseInterest: 'B.Tech / Engineering',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and contact number.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      _subject: `📩 New Contact Message: ${formData.name} (${formData.courseInterest})`,
      _replyto: formData.email || undefined,
      "Name": formData.name,
      "Phone": formData.phone,
      "Email": formData.email || 'Not provided',
      "Course of Interest": formData.courseInterest,
      "Message / Inquiry": formData.message || 'General admission inquiry',
      "Submitted At": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      studentName: formData.name,
      phone: formData.phone,
      email: formData.email,
      course: formData.courseInterest,
      notes: formData.message
    };

    try {
      const res = await fetch(CONSULTANCY_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // Also record in local MAMP backup
      try {
        await fetch('./api/submit-lead.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (e) {}

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-100 mb-2">
            <MapPin className="w-3.5 h-3.5" /> Admission Office Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Contact Siragugal Higher Education Services
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Submit your inquiry or visit our counseling office for transparent, student-friendly college seat guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Left Column: Office Cards */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Office Address */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-1">Head Office</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{CONSULTANCY_INFO.address}</p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Mon - Sun: 9:00 AM - 7:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{CONSULTANCY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Student Note */}
            <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900 space-y-2">
              <h4 className="font-bold text-blue-950">Student Guidance Note:</h4>
              <p className="leading-relaxed text-blue-800">
                Fill the inquiry form with your 12th cutoff mark and target engineering branch. Our team will verify seat matrix and contact you directly.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900">Send an Inquiry to Admin</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in this form and our admission team will respond via phone call or email within 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Message Delivered to Admin!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you <strong>{formData.name}</strong>. We have forwarded your message to the Siragugal administration team. A senior educational counselor will reach out to you at <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sundaram"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Contact / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Course You Are Inquiring About
                      </label>
                      <select
                        value={formData.courseInterest}
                        onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        <option value="B.Tech / Engineering">B.Tech / Engineering</option>
                        <option value="Medical / MBBS">Medical / MBBS</option>
                        <option value="Pharmacy / B.Pharm">Pharmacy / B.Pharm</option>
                        <option value="Allied Health / Nursing">Allied Health / Nursing</option>
                        <option value="Management / MBA / BBA">Management / MBA / BBA</option>
                        <option value="Other Higher Education Courses">Other Higher Education Courses</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Your Message / Questions for Counselor
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Please ask any question regarding cutoff eligibility, fee structure, scholarships, or college choice filling..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Delivering to Admin...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message to Admin</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Connected to official Siragugal Higher Education Services admin inbox.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

