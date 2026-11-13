import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Vigneshwaran K.',
      college: 'PSG College of Technology, Coimbatore',
      branch: 'B.Tech Artificial Intelligence & Data Science',
      text: 'My cut-off was 189.5 and I was really worried about choice filling order. Siragugal counselors analyzed past 3 years trends and got me into PSG Tech AI & DS. Truly grateful!',
      year: 'Admitted 2024'
    },
    {
      name: 'Kavitha Sundaram (Parent)',
      college: 'Dhanalakshmi Srinivasan Engineering College, Perambalur',
      branch: 'B.E. Computer Science & Engineering',
      text: 'As a parent from a rural area, we had zero knowledge about scholarship forms and First Graduate fee waiver. Siragugal staff took care of everything transparently without asking for any commission.',
      year: 'Parent of Student'
    },
    {
      name: 'Praveen Raj M.',
      college: 'Chennai Institute of Technology (CIT Chennai)',
      branch: 'B.Tech Cyber Security',
      text: 'I wanted Cyber Security in an autonomous institution with COE labs. Siragugal guided me straight to CIT Chennai and helped me secure the seat. Best decision for my career.',
      year: 'Admitted 2024'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
            Student & Parent Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            Trusted by Thousands of Families
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Read how Siragugal Higher Education Services helped students reach their dream campuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <h4 className="font-bold text-sm text-slate-900">{r.name}</h4>
                <p className="text-xs font-semibold text-blue-700">{r.college}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-0.5">
                  <span>{r.branch}</span>
                  <span className="font-medium text-slate-400">{r.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

