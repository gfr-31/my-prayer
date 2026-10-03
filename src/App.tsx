import { useState } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import MainApp from "./components/MainApp";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="w-full  min-h-screen bg-warm-cream text-emerald-primary font-sans">
      <AnimatePresence>
        {showSplash && <SplashScreen onStart={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Content Utama */}
      {!showSplash && (
        <div>
          {/* Main Header */}
          <Header onShowSplash={() => setShowSplash(true)} />

          <motion.main
            // Awal: Posisi di bawah (y: 60) & redup (opacity: 0)
            initial={{ opacity: 0, y: 60 }}
            // Tujuan: Posisi normal (y: 0) & menyala terang (opacity: 1)
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto px-4 py-8"
          >
            {/* Isi Main */}
            <MainApp />
          </motion.main>
        </div>
      )}
    </div>
  );
}

export default App;
