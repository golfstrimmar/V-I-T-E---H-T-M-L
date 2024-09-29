import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import viteImagemin from "vite-plugin-imagemin";
import path from "path";
import { resolve } from "path";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import postcss from "@vituum/vite-plugin-postcss";
import { viteStaticCopy } from "vite-plugin-static-copy";
import vue from "@vitejs/plugin-vue";
const pagesInput = {};
const pages = [{ name: "index", path: resolve(__dirname, "index.html") }];
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});
const SVG_FOLDER_PATH = path.resolve("assets", "svg");

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vitePugPlugin({
      pretty: true,
    }),
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH,
    }),
    postcss(),
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
    viteStaticCopy({
      targets: [
        {
          src: "./assets/fonts/*", // Путь к шрифтам
          dest: "assets/fonts", // Папка назначения в dist
        },
      ],
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
        // manualChunks: undefined, // Отключает разбивку на чанки
        // entryFileNames: "assets/index.js", // Имя файла для основного скрипта
        entryFileNames: "assets/[name].js", // Имя файла без хэша
        chunkFileNames: "assets/[name].js", // Для чанков
        assetFileNames: ({ name }) => {
          if (/\.(svg|gif|jpe?g|png)$/.test(name ?? "")) {
            return "assets/img/[name][extname]";
          }
          if (/\.(ttf|otf|eot|woff|woff2)$/.test(name ?? "")) {
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
    // chunkSizeWarningLimit: 60000, // Увеличиваем лимит предупреждения для размера чанков
  },
  server: {
    port: 3000, // Порт для локального сервера
    host: "0.0.0.0", // Доступ извне (по сети)
    hmr: true,
  },
});
