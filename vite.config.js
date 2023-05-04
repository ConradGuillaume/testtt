import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000, // Écoute sur le port 3000
    open: true, // Ouvre automatiquement le navigateur
  },
});
