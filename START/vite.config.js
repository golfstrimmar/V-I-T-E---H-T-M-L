import vitePugPlugin from "vite-plugin-pug-transformer";
import { resolve } from "path";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "path";
// import { ViteAliases } from "vite-aliases";
// import legacy from "@vitejs/plugin-legacy";

const pagesInput = {};
const pages = [{ name: "index", path: resolve(__dirname, "index.html") }];
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});


export default {
  base: "./",
  build: {
    rollupOptions: {
      // input: resolve(__dirname, "index.html"),
      input: {
        ...pagesInput,
      },
      output: {
        manualChunks: undefined,
        // assetFileNames: "assets/[name].[ext]",
        assetFileNames: ({ name }) => {
          if (/\.(svg|gif|jpe?g|png)$/.test(name ?? "")) {
            return "assets/img/[name][extname]";
          }
          if (/\.(ttf|otf|eot|fnt|woff)$/.test(name ?? "")) {
            return "assets/fonts/[name][extname]";
          }
          if (/\.(mp3|mp4)$/.test(name ?? "")) {
            return "assets/video/[name][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
    cssCodeSplit: false,
    chunkSizeWarningLimit: 60000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },

  plugins: [
    dynamicImport(),
    // ViteAliases(),
    vitePugPlugin(),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
  ],
};
