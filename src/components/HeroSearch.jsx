import React from 'react';
import { Search, MapPin, BookOpen, Layers, Filter, Check, ListFilter, Grid } from 'lucide-react';
import { COURSES, SPECIALIZATIONS, DISTRICTS } from '../data/colleges';

export default function HeroSearch({
  selectedCourse,
  setSelectedCourse,
  selectedSpec,
  setSelectedSpec,
  selectedDistrict,
  setSelectedDistrict,
  searchTerm,
  setSearchTerm,
  onResetFilters,
  totalResults,
  viewMode,
  setViewMode
}) {
  return (
    <div className="bg-white border-b border-slate-200 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Friendly Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-2">
              🎓 Student Admission Directory
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Colleges & Higher Education Courses
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Browse approved colleges, engineering branches, fees, cut-offs, and placements. Select your preferred district or branch below.
            </p>
          </div>

          {/* View Mode Toggle (Grid vs District Wise) */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Colleges ({totalResults})</span>
            </button>

            <button
              onClick={() => setViewMode('district')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'district'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>District Wise View</span>
            </button>
          </div>
        </div>

        {/* Clean Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* 1. Search Box */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span>Search College or Keyword</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Dhanalakshmi, PSG, SSN, CSE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2.5 top-2.5 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 2. Course / Degree Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Degree / Course</span>
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {COURSES.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.name} ({course.stream})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Specialization / Branch Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Branch / Specialization</span>
              </label>
              <select
                value={selectedSpec}
                onChange={(e) => setSelectedSpec(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {SPECIALIZATIONS.map((spec, idx) => (
                  <option key={idx} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick District Filter Chips (Friendly 1-Click Selection) */}
          <div className="pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Select District:</span>
              </span>

              {(selectedDistrict !== 'All Districts' || selectedSpec !== 'All Specializations' || searchTerm !== '') && (
                <button
                  onClick={onResetFilters}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {DISTRICTS.map((dist, idx) => {
                const isActive = selectedDistrict === dist;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedDistrict(dist)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {dist}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
