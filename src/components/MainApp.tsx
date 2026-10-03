// import { Type, Copy, Share2, Bookmark } from "lucide-react";
import { ChevronDown, ChevronUp, Type } from "lucide-react";
import { useState } from "react";
import { DOA_DATA } from "../assets/data";

// Type Interface untuk Data Doa
export interface DoaItem {
  id: number;
  title: string;
  subtitle?: string;
  source?: string;
  arabic?: string;
  latin?: string;
  translation?: string;
}

function MainApp() {
  const [fontSize, setFontSize] = useState<number>(28);

  const adjustFont = (delta: number) => {
    setFontSize((prev) => Math.min(Math.max(20, prev + delta), 48));
  };

  // Fungsi Croll Berdasarkan Tinggi Layar
  const handleScroll = (direction: "up" | "down") => {
    // Menghitung Tinggi Layar Yang Tampak Dikurangi Sedikit Offset Agar Tidak Terpotong
    const scrollAmount = window.innerHeight * 0.8;

    window.scrollBy({
      top: direction === "down" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  //   // Handler Tombol Aksi
  //   const handleCopy = (title: string, arabic?: string, translation?: string) => {
  //     const textToCopy = `${title}\n\n${arabic || ""}\n\n${translation || ""}`;
  //     navigator.clipboard.writeText(textToCopy);
  //     alert(`Doa "${title}" berhasil disalin!`);
  //   };

  //   const handleShare = async (title: string, translation?: string) => {
  //     if (navigator.share) {
  //       try {
  //         await navigator.share({
  //           title: title,
  //           text: `${title}\n${translation || ""}`,
  //           url: window.location.href,
  //         });
  //       } catch (err) {
  //         console.log("Gagal membagikan:", err);
  //       }
  //     } else {
  //       handleCopy(title, "", translation);
  //     }
  //   };

  //   const handleBookmark = (id: number) => {
  //     // Tambahkan logika simpan ke localStorage / state favorit di sini
  //     alert(`Doa nomor ${id} disimpan ke favorit!`);
  //   };

  return (
    <main className="grow max-w-4xl w-full mx-auto px-4 md:px-8 py-6 relative space-y-6">
      {/* Hero Banner & Font Sizer */}
      <div className="p-5 md:p-6 rounded-2xl border-2 border-emeraldPrimary bg-warm-cream flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-primary text-warm-cream text-[11px] font-bold rounded-full uppercase tracking-wider mb-2">
            Doa Setelah Sholat Fardhu
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-emeraldPrimary">
            Bacaan Zikir & Doa Sahih
          </h2>
          <p className="text-xs opacity-80 mt-0.5 text-emeraldPrimary">
            Sesuaikan ukuran teks Arab agar lebih nyaman dibaca.
          </p>
        </div>

        {/* Font Resizer Tool */}
        <div className="bg-warm-cream border border-emeraldPrimary p-2.5 rounded-xl flex items-center space-x-3 text-xs font-semibold w-full md:w-auto justify-between text-emeraldPrimary">
          <span className="flex items-center gap-1.5">
            <Type className="w-4 h-4" /> Ukuran Teks:
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => adjustFont(-2)}
              className="w-8 h-8 border border-emeraldPrimary rounded-lg flex items-center justify-center hover:bg-emerald-primary hover:text-warm-cream transition font-bold text-sm cursor-pointer"
            >
              -
            </button>
            <span className="w-9 text-center font-bold">{fontSize}px</span>
            <button
              onClick={() => adjustFont(2)}
              className="w-8 h-8 border border-emeraldPrimary rounded-lg flex items-center justify-center hover:bg-emerald-primary hover:text-warm-cream transition font-bold text-sm cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* List Doa */}
      <div className="space-y-4">
        {DOA_DATA.map((item: DoaItem) => (
          <article
            key={item.id}
            className="p-6 rounded-2xl border-2 border-emeraldPrimary bg-warm-cream transition hover:shadow-md space-y-4 fade-in"
          >
            {/* Card Top Bar */}
            <div className="flex items-center justify-between border-b border-emeraldPrimary/20 pb-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-primary text-warm-cream flex items-center justify-center text-xs font-bold shrink-0">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-bold text-base leading-tight text-emeraldPrimary">
                    {item.title
                      .replace(/^\d+\.\s*/, "")
                      .replace(/^❤️\s*\d+\.\s*/, "❤️ ")}
                  </h3>
                  {(item.subtitle || item.source) && (
                    <span className="text-[10px] uppercase font-bold opacity-70 block text-emeraldPrimary">
                      {item.subtitle || item.source}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              {/* <div className="flex items-center space-x-1.5 text-emeraldPrimary">
                <button
                  onClick={() =>
                    handleCopy(item.title, item.arabic, item.translation)
                  }
                  title="Salin Doa"
                  className="p-2 rounded-lg border border-emeraldPrimary hover:bg-emerald-primary hover:text-warm-cream transition cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleShare(item.title, item.translation)}
                  title="Bagikan"
                  className="p-2 rounded-lg border border-emeraldPrimary hover:bg-emerald-primary hover:text-warm-cream transition cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleBookmark(item.id)}
                  title="Favorit"
                  className="p-2 rounded-lg border border-emeraldPrimary hover:bg-emerald-primary hover:text-warm-cream transition cursor-pointer"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div> */}
            </div>

            {/* Arabic Content */}
            {item.arabic && (
              <div className="py-2 text-right">
                <p
                  className="font-arabic font-normal text-emeraldPrimary leading-[2.2] whitespace-pre-line"
                  style={{ fontSize: `${fontSize}px` }}
                  dir="rtl"
                >
                  {item.arabic}
                </p>
              </div>
            )}

            {/* Transliteration & Translation */}
            <div className="space-y-1.5 pt-2 border-t border-emeraldPrimary/10 text-emeraldPrimary">
              {item.latin && (
                <p className=" md:italic text-xs font-semibold italic opacity-90 leading-relaxed whitespace-pre-line">
                  "{item.latin}"
                </p>
              )}
              {item.translation && (
                <p className="text-xs opacity-80 leading-relaxed whitespace-pre-line">
                  {item.latin && (
                    <strong className="font-semibold">Artinya: </strong>
                  )}
                  {item.translation}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Tombol Scroll Navigation Atas Bawah */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-2">
        <button
          onClick={() => handleScroll("up")}
          aria-label="Scroll Ke Atas"
          className="w-11 h-11 bg-emerald-primary text-warm-cream rounded-full border-2 border-warm-cream shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-90 hover:opacity-10"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleScroll("down")}
          aria-label="Scroll Ke Atas"
          className="w-11 h-11 bg-emerald-primary text-warm-cream rounded-full border-2 border-warm-cream shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-90 hover:opacity-10"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
}

export default MainApp;
