import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import viteImagemin from "vite-plugin-imagemin";
import path from "path";
import { resolve } from "path";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";

const pagesInput = {};
const pages = [{ name: "index", path: resolve(__dirname, "index.html") }];
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});
const SRC_PATH = path.resolve(__dirname, "src");
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, "assets", "svg");
export default defineConfig({
  base: "./",
  plugins: [
    vitePugPlugin({
      pretty: true,
    }),
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH,
    }),

    viteImagemin({
      // Настройки для минификации изображений
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Алиас для src
    },
  },
  build: {
    rollupOptions: {
      input: {
        ...pagesInput,
      },
      output: {
        entryFileNames: "assets/index.js", // Имя файла для основного скрипта
        chunkFileNames: "assets/[name].js", // Имя файла для чанков
        assetFileNames: "[name].[ext]", // Имя файла для ассетов
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
    cssCodeSplit: false, // Объединяем все стили в один файл
    chunkSizeWarningLimit: 60000, // Увеличиваем лимит предупреждения для размера чанков
  },
  server: {
    port: 3000, // Порт для локального сервера
    host: "0.0.0.0", // Доступ извне (по сети)
    hmr: true,
  },
});
