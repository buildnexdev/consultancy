import React, { useState } from 'react';
import { Phone, MessageCircle, X, GraduationCap, ChevronUp } from 'lucide-react';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function FloatingContact({ onOpenApply }) {
  const [open, setOpen] = useState(false);

  const phoneUrl = `tel:${CONSULTANCY_INFO.phone}`;
  const whatsappUrl = `https://wa.me/${CONSULTANCY_INFO.whatsapp}?text=${encodeURIComponent('Hello Siragugal, I want admission guidance for higher education courses.')}`;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 md:hidden">
      
      {/* Expanded quick contact actions */}
      {open && (
        <div className="flex flex-col items-end gap-2 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* Quick Call */}
          <a
            href={phoneUrl}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-600 text-white shadow-lg text-xs font-bold active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>Call Counselor ({CONSULTANCY_INFO.phone})</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 text-white shadow-lg text-xs font-bold active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Quick Form */}
          <button
            onClick={() => {
              setOpen(false);
              onOpenApply(null);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-amber-500 text-slate-950 shadow-lg text-xs font-bold active:scale-95 transition-transform"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Open Guidance Form</span>
          </button>
        </div>
      )}

      {/* Floating Main Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl active:scale-95 transition-all"
        aria-label="Contact options"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

    </div>
  );
}

