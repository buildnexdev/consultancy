import React from 'react';
import { Filter, RotateCcw, Check, IndianRupee, Star, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function FiltersSidebar({
  collegeType,
  setCollegeType,
  maxFee,
  setMaxFee,
  minRating,
  setMinRating,
  selectedFacilities,
  setSelectedFacilities,
  onResetAll,
  onOpenApply
}) {
  const collegeTypes = ['All Types', 'Autonomous', 'Deemed University', 'Autonomous / Govt Aided'];
  const availableFacilities = [
    'Wi-Fi Campus',
    'Separate Hostels',
    'Hi-Tech Labs',
    'Fleet Buses',
    'Sports Complex',
    'Placement Cell'
  ];

  const handleFacilityToggle = (facility) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  return (
    <aside className="w-full space-y-6">
      
      {/* Filter Box Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Refine Results</h3>
          </div>
          <button
            onClick={onResetAll}
            className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* 1. College Type */}
        <div className="pt-4 pb-4 border-b border-slate-100">
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2.5">
            Institution Classification
          </label>
          <div className="space-y-1.5">
            {collegeTypes.map((type, idx) => (
              <label 
                key={idx} 
                className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:text-blue-600 py-1"
              >
                <input
                  type="radio"
                  name="collegeType"
                  value={type}
                  checked={collegeType === type}
                  onChange={(e) => setCollegeType(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                />
                <span className="font-medium text-xs sm:text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 2. Maximum Annual Tuition Fee Slider */}
        <div className="pt-4 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase text-slate-600">
              Max Tuition Fee
            </label>
            <span className="text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              ₹{(maxFee / 1000).toFixed(0)}k / year
            </span>
          </div>
          <input
            type="range"
            min="60000"
            max="300000"
            step="10000"
            value={maxFee}
            onChange={(e) => setMaxFee(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
            <span>₹60,000</span>
            <span>₹1,80,000</span>
            <span>₹3,00,000+</span>
          </div>
        </div>

        {/* 3. Rating */}
        <div className="pt-4 pb-4 border-b border-slate-100">
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2.5">
            Student Rating
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { val: 0, label: 'All' },
              { val: 4.5, label: '4.5 ★ +' },
              { val: 4.7, label: '4.7 ★ +' },
            ].map((r, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMinRating(r.val)}
                className={`py-1.5 px-2 text-xs font-bold rounded-lg border text-center transition-all ${
                  minRating === r.val
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Campus Facilities */}
        <div className="pt-4">
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2.5">
            Key Campus Facilities
          </label>
          <div className="space-y-2">
            {availableFacilities.map((fac, idx) => {
              const isChecked = selectedFacilities.includes(fac);
              return (
                <label 
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer hover:text-blue-600"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleFacilityToggle(fac)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span>{fac}</span>
                </label>
              );
            })}
          </div>
        </div>

      </div>

      {/* Free Student Guidance Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-slate-800">
        <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> Free Guidance
        </div>

        <h4 className="font-bold text-sm text-slate-900 leading-snug mb-1.5">
          Need Help With Cut-off & Seat Guidance?
        </h4>

        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          Siragugal higher education coordinators assist students in checking seat availability, cutoffs, and scholarship concessions.
        </p>

        <div className="space-y-1.5 text-xs text-slate-700 mb-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Govt Quota (TNEA) & Management Quota</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Merit & First Graduate (FG) Concessions</span>
          </div>
        </div>

        <button
          onClick={() => onOpenApply(null)}
          className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Inquire for Admission</span>
        </button>
      </div>

    </aside>
  );
}

