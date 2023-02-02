import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "PetLab Header",
      fileName: "header",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        main: resolve(__dirname, "src/main.tsx"),
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
