import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist', // Đảm bảo đường dẫn mặc định khi build
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
