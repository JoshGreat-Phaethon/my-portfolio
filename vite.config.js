import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // WAJIB! Biar Vercel nemu file JS & CSS
  build: {
    outDir: "dist", // Default-nya memang dist, tapi kita pastikan aja
  },
});
