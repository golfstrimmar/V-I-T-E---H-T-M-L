// vite.config.js
import { defineConfig } from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/vite/dist/node/index.js";
import vitePugPlugin from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/vite-plugin-pug-transformer/src/index.js";
import viteImagemin from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/vite-plugin-imagemin/dist/index.mjs";
import path from "path";
import { resolve } from "path";
import createSvgSpritePlugin from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/vite-plugin-svg-spriter/lib/index.js";
import postcss from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/@vituum/vite-plugin-postcss/index.js";
import { viteStaticCopy } from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/vite-plugin-static-copy/dist/index.js";
import vue from "file:///D:/WEB/V-I-T-E---H-T-M-L/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\WEB\\V-I-T-E---H-T-M-L";
var pagesInput = {};
var pages = [{ name: "index", path: resolve(__vite_injected_original_dirname, "index.html") }];
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});
var SVG_FOLDER_PATH = path.resolve("assets", "svg");
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    vue(),
    vitePugPlugin({
      pretty: true
    }),
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH
    }),
    postcss(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false }
        ]
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: "./assets/fonts/*",
          dest: "assets/fonts"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      input: {
        ...pagesInput
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
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
        }
      }
    },
    cssCodeSplit: false
  },
  server: {
    port: 3e3,
    host: "0.0.0.0",
    hmr: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXRUJcXFxcVi1JLVQtRS0tLUgtVC1NLUxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdFQlxcXFxWLUktVC1FLS0tSC1ULU0tTFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV0VCL1YtSS1ULUUtLS1ILVQtTS1ML3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZpdGVQdWdQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLXB1Zy10cmFuc2Zvcm1lclwiO1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZW1pblwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGNyZWF0ZVN2Z1Nwcml0ZVBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLXNwcml0ZXJcIjtcclxuaW1wb3J0IHBvc3Rjc3MgZnJvbSBcIkB2aXR1dW0vdml0ZS1wbHVnaW4tcG9zdGNzc1wiO1xyXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdGF0aWMtY29weVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuY29uc3QgcGFnZXNJbnB1dCA9IHt9O1xyXG5jb25zdCBwYWdlcyA9IFt7IG5hbWU6IFwiaW5kZXhcIiwgcGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSB9XTtcclxucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gIHBhZ2VzSW5wdXRbcGFnZS5uYW1lXSA9IHBhZ2UucGF0aDtcclxufSk7XHJcbmNvbnN0IFNWR19GT0xERVJfUEFUSCA9IHBhdGgucmVzb2x2ZShcImFzc2V0c1wiLCBcInN2Z1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIuL1wiLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdml0ZVB1Z1BsdWdpbih7XHJcbiAgICAgIHByZXR0eTogdHJ1ZSxcclxuICAgIH0pLFxyXG4gICAgY3JlYXRlU3ZnU3ByaXRlUGx1Z2luKHtcclxuICAgICAgc3ZnRm9sZGVyOiBTVkdfRk9MREVSX1BBVEgsXHJcbiAgICB9KSxcclxuICAgIHBvc3Rjc3MoKSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIGdpZnNpY2xlOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlwbmc6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgfSxcclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDIwLFxyXG4gICAgICB9LFxyXG4gICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgIHF1YWxpdHk6IFswLjY1LCAwLjldLFxyXG4gICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcInJlbW92ZVZpZXdCb3hcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInJlbW92ZUVtcHR5QXR0cnNcIiwgYWN0aXZlOiBmYWxzZSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgdGFyZ2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCIuL2Fzc2V0cy9mb250cy8qXCIsXHJcbiAgICAgICAgICBkZXN0OiBcImFzc2V0cy9mb250c1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIC4uLnBhZ2VzSW5wdXQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0uanNcIixcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLmpzXCIsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICh7IG5hbWUgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKC9cXC4oc3ZnfGdpZnxqcGU/Z3xwbmcpJC8udGVzdChuYW1lID8/IFwiXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImFzc2V0cy9pbWcvW25hbWVdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoL1xcLih0dGZ8b3RmfGVvdHx3b2ZmfHdvZmYyKSQvLnRlc3QobmFtZSA/PyBcIlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhc3NldHMvZm9udHMvW25hbWVdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoL1xcLihtcDN8bXA0KSQvLnRlc3QobmFtZSA/PyBcIlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhc3NldHMvdmlkZW8vW25hbWVdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoL1xcLmNzcyQvLnRlc3QobmFtZSA/PyBcIlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhc3NldHMvY3NzL1tuYW1lXVtleHRuYW1lXVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgaG1yOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLFNBQVMsb0JBQW9CO0FBQzdSLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGVBQWU7QUFDeEIsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sU0FBUztBQVJoQixJQUFNLG1DQUFtQztBQVN6QyxJQUFNLGFBQWEsQ0FBQztBQUNwQixJQUFNLFFBQVEsQ0FBQyxFQUFFLE1BQU0sU0FBUyxNQUFNLFFBQVEsa0NBQVcsWUFBWSxFQUFFLENBQUM7QUFDeEUsTUFBTSxRQUFRLENBQUMsU0FBUztBQUN0QixhQUFXLEtBQUssSUFBSSxJQUFJLEtBQUs7QUFDL0IsQ0FBQztBQUNELElBQU0sa0JBQWtCLEtBQUssUUFBUSxVQUFVLEtBQUs7QUFFcEQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLElBQ0Qsc0JBQXNCO0FBQUEsTUFDcEIsV0FBVztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLE1BQU0sR0FBRztBQUFBLFFBQ25CLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUCxFQUFFLE1BQU0sZ0JBQWdCO0FBQUEsVUFDeEIsRUFBRSxNQUFNLG9CQUFvQixRQUFRLE1BQU07QUFBQSxRQUM1QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsTUFDTDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDNUIsY0FBSSx5QkFBeUIsS0FBSyxRQUFRLEVBQUUsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLDhCQUE4QixLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQ2xELG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksZUFBZSxLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQ25DLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksU0FBUyxLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
