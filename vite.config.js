import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/avani-ecocare/", // 👈 THIS MUST match your repo name
  plugins: [react()],
});
