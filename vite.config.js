import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Certifique-se de que os alias estejam corretos
      "firebase/app": "firebase/app",
      "firebase/auth": "firebase/auth",
    },
  },
});
