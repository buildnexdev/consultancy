import React, { useState } from 'react';
import { Send, Menu, X, GraduationCap, School, Info, HelpCircle, PhoneCall, Compass, Home } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function Header({ onOpenApply }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', type: 'home', to: '/' },
    { label: 'Colleges', type: 'page', to: '/colleges' },
    { label: 'About Us', type: 'anchor', anchor: 'about', to: '/#about' },
    { label: 'Career & Guidance', type: 'anchor', anchor: 'career', to: '/#career' },
    { label: 'FAQ', type: 'anchor', anchor: 'faq', to: '/#faq' },
    { label: 'Contact', type: 'anchor', anchor: 'contact', to: '/#contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.type === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.type === 'page') {
      if (location.pathname === item.to) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(item.to);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.type === 'anchor') {
      const scrollToAnchor = () => {
        const el = document.getElementById(item.anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(scrollToAnchor, 150);
      } else {
        scrollToAnchor();
      }
    }
  };

  const isLinkActive = (item) => {
    if (item.type === 'home') {
      return location.pathname === '/';
    }
    if (item.type === 'page') {
      return location.pathname === item.to;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo & Branding */}
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 select-none flex-shrink-0 cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center flex-shrink-0">
              <img 
                src="./logo.png" 
                alt="Siragugal Services Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-blue-700 text-white font-black flex items-center justify-center text-xs">S</div>';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-blue-900 font-sans">
                  SIRAGUGAL
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 hidden xs:inline">
                  Services
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-none">
                Higher Education & Career Counseling
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.to}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  isLinkActive(item)
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'hover:bg-slate-100 text-slate-700 hover:text-blue-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Primary Action Button: "Apply Now" (Mobile) / "Free Admission Guidance" (Desktop) */}
            <button
              onClick={() => onOpenApply(null)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-xs whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <span className="hidden sm:inline">Free Admission Guidance</span>
              <span className="sm:hidden">Apply Now</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-3 border-t border-slate-100 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.to}
                onClick={(e) => handleNavClick(e, item)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isLinkActive(item)
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
              </a>
            ))}

            <div className="pt-2 px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply(null);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Apply Now – Free Admission Guidance</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
