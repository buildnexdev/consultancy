import React from 'react';
import { Mail, MapPin, Phone, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function Footer({ onOpenApply }) {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-lg bg-white p-1 flex items-center justify-center flex-shrink-0">
                <img 
                  src="./logo.png" 
                  alt="Siragugal Services" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <h4 className="text-base font-black text-white">SIRAGUGAL</h4>
                <p className="text-[10px] uppercase font-bold text-blue-400">Higher Education Services</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Dedicated student admission advisory helping students identify premier engineering, medical, management, and professional institutions in Tamil Nadu and South India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Explore Portal
            </h5>
            <ul className="space-y-1.5 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/colleges" className="hover:text-white transition-colors">College Directory (All 19 Colleges)</Link></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How Admission Works</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Help</a></li>
            </ul>
          </div>

          {/* Admissions 2025-2026 */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Admission Guidance
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed">
              Admissions open for B.Tech / B.E., MBBS, B.Pharm, B.Sc Nursing, and MBA. Contact our academic team for seat booking.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenApply(null)}
                className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
              >
                Get Free Guidance
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Contact & Office
            </h5>
            <div className="flex items-start gap-2 text-slate-400 text-xs">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>{CONSULTANCY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>{CONSULTANCY_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{CONSULTANCY_INFO.phone}</span>
            </div>
          </div>

        </div>

        {/* Copyright & Admin Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Siragugal Higher Education Services. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a href="./admin-leads.php" className="text-slate-400 hover:text-white underline">
              Admin Lead Portal (MAMP)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
