// import React from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onStart?: () => void;
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <motion.div
      id="splashScreen"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-50 bg-emerald-primary text-warm-cream flex flex-col items-center justify-between p-8"
    >
      {/* Splash Center Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center max-w-md mx-auto my-auto"
      >
        {/*  Icon Masjid  */}
        <div className="md:38 w-28 h-28 mb-6 rounded-full border-2 border-warm-cream p-3 flex items-center justify-center bg-warm-cream/5 relative animate-pulse ">
          <svg
            className="md:w-26 w-16 h-16 text-warm-cream fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L10.5 5H13.5L12 2ZM12 6C8.5 6 6 8.5 6 12V21H18V12C18 8.5 15.5 6 12 6ZM10 19H8V15H10V19ZM16 19H14V15H16V19Z" />
          </svg>
          <div className="absolute -top-1 -right-1 bg-warm-cream text-emerald-primary p-1.5 rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles w-4 h-4"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          My Prayer
        </h1>
        <p className="md:text-lg text-warm-cream/80 text-[12px] font-light mb-8 leading-relaxed">
          Panduan Khusyuk Doa &amp; Zikir Setelah Sholat Fardhu.
        </p>

        {/* Button Mulai Membaca */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onStart}
          className="w-full py-4 px-8 bg-warm-cream text-emerald-primary font-bold rounded-xl shadow-xl hover:bg-opacity-95 transform active:scale-95 transition flex items-center justify-center space-x-2 text-base cursor-pointer"
        >
          <span>Mulai Membaca</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right w-5 h-5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
      {/* Splash Footer */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:text-[11px] text-[8px] text-warm-cream/60 tracking-widest uppercase font-medium text-center mt-5"
      >
        Craete By GFH
      </motion.div>
    </motion.div>
  );
}
