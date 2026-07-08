import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Workshop13-ReactJS-Components-and-Props/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "docs",
  },
});