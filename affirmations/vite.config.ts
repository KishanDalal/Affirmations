import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // Define the proxy path
        target: "https://www.affirmations.dev/", // Target URL
        changeOrigin: true, // Required for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' from the request path
      },
    },
  },
});
