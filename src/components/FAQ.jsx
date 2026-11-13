import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does Siragugal Higher Education Services help with admission?',
      a: 'We provide end-to-end guidance: evaluating your 12th cutoff mark, identifying top autonomous and affiliated colleges matching your budget, setting up your TNEA online choice-filling order, and securing direct/management quota seats with transparent fee commitments.'
    },
    {
      q: 'Do you charge any counseling fees from students?',
      a: 'No. Our primary admission guidance and cut-off consultation for students and parents is 100% free. We work directly with institutional admissions networks.'
    },
    {
      q: 'Can I get admission if my cut-off is between 120 and 150?',
      a: 'Yes! There are dozens of reputed NAAC A grade autonomous colleges with 90%+ placement rates in Chennai, Coimbatore, Trichy, and Salem that accept cutoffs in this range under counseling and management categories.'
    },
    {
      q: 'How can I avail First Graduate (FG) and 7.5% Government School scholarships?',
      a: 'Our coordinators check your eligibility certificates (First Graduate certificate, 6th to 12th Govt school study certificates, income certificate) and ensure your tuition fee concession is officially deducted before fee payment.'
    },
    {
      q: 'What is the difference between Autonomous colleges and Affiliated colleges?',
      a: 'Autonomous colleges design their own cutting-edge industry curriculum (e.g., adding AI, Robotics, Cloud Computing in 1st year) and conduct their own exams, leading to superior campus placement records compared to standard non-autonomous colleges.'
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Clear answers to help students and parents make confident higher education decisions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 hover:text-blue-700"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

