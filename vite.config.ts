import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "My Prayer - Doa & Zikir",
        short_name: "MyPrayer",
        description: "Aplikasi Doa & Dzikir Setelah Sholat untuk Gifran",
        theme_color: "#064e3b",
        background_color: "#fdfbf7",
        display: "standalone",
        orientation: "portrait",
        icons: [
          { src: "icon-masjid.svg", sizes: "192x192", type: "image/svg+xml" },
        ],
      },
    }),
  ],
});
