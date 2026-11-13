import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Award, Building2, CheckCircle2, IndianRupee, 
  TrendingUp, BookOpen, Layers, Shield, Send 
} from 'lucide-react';
import { COLLEGES_DATA } from '../data/colleges';
import EnquiryForm from '../components/EnquiryForm';

export default function CollegeDetailPage({ onOpenApply }) {
  const { id } = useParams();
  const college = COLLEGES_DATA.find(c => c.id === id) || COLLEGES_DATA[0];

  if (!college) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold text-slate-800">College not found</h2>
        <Link to="/colleges" className="text-blue-600 underline text-sm mt-2 inline-block">
          Return to College Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Back Link */}
        <Link 
          to="/colleges"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to College Directory</span>
        </Link>

        {/* Top Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative h-56 sm:h-72 w-full bg-slate-900">
            <img 
              src={college.image} 
              alt={college.name} 
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-600 text-white shadow-xs">
                  {college.type}
                </span>
                {college.code && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-400 text-slate-950 shadow-xs">
                    Counseling Code: {college.code}
                  </span>
                )}
                {college.naac && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-600 text-white shadow-xs">
                    NAAC {college.naac}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {college.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{college.address} ({college.district} District)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content Layout: Left Information + Right Sticky Guidance Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details (8 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Annual Tuition</span>
                <strong className="text-sm font-black text-blue-900">{college.fees?.display}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Cut-Off</span>
                <strong className="text-sm font-black text-amber-700">{college.cutoff?.display}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Average CTC</span>
                <strong className="text-sm font-black text-emerald-700">{college.placement?.averagePackage}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Placement Rate</span>
                <strong className="text-sm font-black text-purple-700">{college.placement?.rate}</strong>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-slate-900">Institution Highlights</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {college.highlights}
              </p>
            </div>

            {/* Courses & Specialization Matrix */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Degrees & Branches Offered</span>
              </h3>

              <div className="space-y-4">
                {college.courses?.map((crs, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded inline-block mb-3">
                      {crs.degree}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {crs.branches?.map((branch, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span className="font-semibold">{branch}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Details */}
            {college.placement?.recruiters && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span>Campus Recruiters & Packages</span>
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {college.placement.recruiters.map((r, idx) => (
                    <span key={idx} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                      🏢 {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Facilities */}
            {college.facilities && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900">Campus Facilities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {college.facilities.map((fac, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 sticky top-20">
            <div className="bg-white rounded-2xl border border-blue-200 shadow-md p-5 sm:p-6">
              <EnquiryForm 
                initialCollege={college}
                title={`Get Admission Guidance for ${college.name}`}
                subtitle="Fill your details below to check seat vacancy, cutoff eligibility, and scholarship fee reduction."
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

