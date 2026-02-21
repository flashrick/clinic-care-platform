import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiTarget = process.env.VITE_DEV_API_TARGET || "http://localhost:8000";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/health": {
        target: apiTarget,
        changeOrigin: true,
      },
      "/api": {
        target: apiTarget,
        changeOrigin: true,
      },
    },
  },
});
