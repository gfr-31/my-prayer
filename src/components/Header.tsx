import { Moon, Home } from "lucide-react";

interface HeaderProps {
  onShowSplash: () => void;
}

function Header({ onShowSplash }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-warm-cream border-b border-emerald-primary/20 px-4 md:px-8 py-3.5 transition-all text-emerald-primary">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onShowSplash}
        >
          <div className="w-10 h-10 rounded-full bg-emerald-primary text-warm-cream flex items-center justify-center font-bold shadow-md">
            <Moon className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight leading-none">
              My Prayer
            </h1>
            <span className="text-[10px] tracking-widest uppercase opacity-80 font-medium block mt-0.5">
              Doa & Zikir Sholat
            </span>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onShowSplash}
            title="Buka Splash Screen"
            className="p-2 rounded-full border border-emerald-primary/30 hover:bg-emerald-primary hover:text-warm-cream transition cursor-pointer"
          >
            <Home className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
