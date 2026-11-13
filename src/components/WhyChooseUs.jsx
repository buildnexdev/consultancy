import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Users, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: '100% Genuine Admission Guidance',
      desc: 'Transparent counseling with direct college management authorization. Zero false promises, zero hidden charges.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'Personalized Cut-Off & Choice Filling',
      desc: 'Expert analysis of your 12th marks/cutoff to prepare an optimal choice order for TNEA counseling and direct seats.',
      icon: Award,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Scholarships & Fee Concession Support',
      desc: 'Complete guidance on First Graduate (FG) concessions, 7.5% Govt school quota, and institutional merit scholarships up to 100%.',
      icon: HeartHandshake,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      title: '15,000+ Students Successfully Placed',
      desc: 'Over 12+ years of educational mentoring across top engineering, medical, management, and allied health colleges.',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 scroll-mt-20">
      <span id="why-us" className="sr-only"></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded">
            Why Choose Siragugal
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            Student-First Admission Advisory You Can Trust
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We simplify your higher education journey and protect you from deceptive promises or overpriced seat matrices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
                <div className={`w-11 h-11 rounded-xl ${p.bg} ${p.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

