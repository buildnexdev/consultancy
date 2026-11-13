import React from 'react';
import { Send, CheckCircle2, UserCheck, Award, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenApply }) {
  const steps = [
    {
      num: '01',
      title: 'Submit Details & Cut-off',
      desc: 'Fill out our simple enquiry form with your 12th marks, target degree, and preferred district.',
      icon: Send,
      color: 'bg-blue-600 text-white'
    },
    {
      num: '02',
      title: '1-on-1 Academic Counseling',
      desc: 'Our counselor reviews past TNEA cutoffs, checks seat matrix, and prepares a tailored choice-filling plan.',
      icon: UserCheck,
      color: 'bg-amber-500 text-slate-950'
    },
    {
      num: '03',
      title: 'Seat Booking & Scholarship',
      desc: 'Direct campus spot admission, transparent fee breakdown, and scholarship sanction without hassles.',
      icon: Award,
      color: 'bg-emerald-600 text-white'
    }
  ];

  return (
    <section id="career" className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 scroll-mt-20">
      <span id="how-it-works" className="sr-only"></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            How Admission Guidance Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We make securing your dream college seat straightforward, stress-free, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black ${st.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-black text-slate-100">{st.num}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onOpenApply(null)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <span>Start Your Admission Process Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

