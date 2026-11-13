import React from 'react';
import { MapPin, Award, IndianRupee, TrendingUp, ChevronRight, FileText, Send, Building } from 'lucide-react';

export default function DistrictWiseView({
  colleges,
  onOpenDetails,
  onOpenApply,
  selectedDistrict
}) {
  // Group colleges by district
  const groupedColleges = colleges.reduce((acc, college) => {
    const dist = college.district || college.location.city || 'Other Districts';
    if (!acc[dist]) {
      acc[dist] = [];
    }
    acc[dist].push(college);
    return acc;
  }, {});

  const districtNames = Object.keys(groupedColleges);

  if (colleges.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-xl mx-auto my-8">
        <p className="font-bold text-slate-800 text-base">No colleges match your filter in this district.</p>
        <p className="text-xs text-slate-500 mt-1">Try selecting "All Districts" or clearing your search term.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 my-6">
      {districtNames.map((dist) => {
        const districtColleges = groupedColleges[dist];

        return (
          <section key={dist} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            
            {/* District Heading Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    {dist} District
                  </h2>
                  <p className="text-xs text-slate-500">
                    {districtColleges.length} {districtColleges.length === 1 ? 'College' : 'Colleges'} Listed
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                Tamil Nadu Higher Education
              </span>
            </div>

            {/* List of Colleges in this District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {districtColleges.map((col) => (
                <div 
                  key={col.id} 
                  className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div>
                    {/* Top badging */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {col.type}
                      </span>
                      {col.counselingCode && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                          TNEA Code: {col.counselingCode}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {col.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{col.location.address}</span>
                    </p>

                    {/* Stats Box */}
                    <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-white rounded-lg border border-slate-200 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 block">Annual Tuition</span>
                        <strong className="text-blue-900 font-bold">₹{(col.annualFee).toLocaleString('en-IN')} / yr</strong>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 block">Placement (Avg / High)</span>
                        <strong className="text-emerald-700 font-bold">{col.averagePackage}</strong>
                        <span className="text-[11px] text-slate-500"> ({col.highestPackage})</span>
                      </div>
                    </div>

                    {/* Key Branches */}
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                        Popular Branches:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {col.specializations.slice(0, 3).map((s, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-800">
                            {s}
                          </span>
                        ))}
                        {col.specializations.length > 3 && (
                          <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                            +{col.specializations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-slate-200/80 flex items-center gap-2">
                    <button
                      onClick={() => onOpenDetails(col)}
                      className="flex-1 py-2 px-3 rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>College Details</span>
                    </button>

                    <button
                      onClick={() => onOpenApply(col)}
                      className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Inquire / Apply</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </section>
        );
      })}
    </div>
  );
}

