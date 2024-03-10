// vite.config.ts
import react from "file:///C:/Users/Yaswanth/Documents/internship(aihyr)/sbf/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Yaswanth/Documents/internship(aihyr)/sbf/node_modules/vite/dist/node/index.js";
import EsLint from "file:///C:/Users/Yaswanth/Documents/internship(aihyr)/sbf/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///C:/Users/Yaswanth/Documents/internship(aihyr)/sbf/node_modules/vite-tsconfig-paths/dist/index.mjs";
import path from "path";
import IstanbulPlugin from "file:///C:/Users/Yaswanth/Documents/internship(aihyr)/sbf/node_modules/vite-plugin-istanbul/dist/index.mjs";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    IstanbulPlugin({
      include: "src/*",
      exclude: ["node_modules", "test/"],
      extension: [".js", ".ts", ".vue"],
      requireEnv: true
    }),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    })
    // dts({
    //   include: ['src/component/'],
    // }),
  ],
  build: {
    minify: true,
    //root: path.resolve('src', 'index.ts'),
    lib: {
      entry: path.resolve("src", "index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxZYXN3YW50aFxcXFxEb2N1bWVudHNcXFxcaW50ZXJuc2hpcChhaWh5cilcXFxcc2JmXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxZYXN3YW50aFxcXFxEb2N1bWVudHNcXFxcaW50ZXJuc2hpcChhaWh5cilcXFxcc2JmXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ZYXN3YW50aC9Eb2N1bWVudHMvaW50ZXJuc2hpcChhaWh5cikvc2JmL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcidcclxuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBJc3RhbmJ1bFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1pc3RhbmJ1bCc7XHJcblxyXG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludFxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHRzQ29uZmlnUGF0aHMoKSxcclxuICAgIElzdGFuYnVsUGx1Z2luKHtcclxuXHRcdFx0aW5jbHVkZTogJ3NyYy8qJyxcclxuXHRcdFx0ZXhjbHVkZTogWydub2RlX21vZHVsZXMnLCAndGVzdC8nXSxcclxuXHRcdFx0ZXh0ZW5zaW9uOiBbJy5qcycsICcudHMnLCAnLnZ1ZSddLFxyXG5cdFx0XHRyZXF1aXJlRW52OiB0cnVlLFxyXG5cdFx0fSksXHJcbiAgICBsaW50ZXJQbHVnaW4oe1xyXG4gICAgICBpbmNsdWRlOiBbJy4vc3JjfS8qKi8qLnt0cyx0c3h9J10sXHJcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxyXG4gICAgfSksXHJcbiAgICAvLyBkdHMoe1xyXG4gICAgLy8gICBpbmNsdWRlOiBbJ3NyYy9jb21wb25lbnQvJ10sXHJcbiAgICAvLyB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6IHRydWUsXHJcbiAgICAvL3Jvb3Q6IHBhdGgucmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcclxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG5cdFx0XHRcdGdsb2JhbHM6IHtcclxuXHRcdFx0XHRcdHJlYWN0OiAnUmVhY3QnLFxyXG5cdFx0XHRcdFx0J3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVYsT0FBTyxXQUFXO0FBQ25XLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFVBQVU7QUFDakIsT0FBTyxvQkFBb0I7QUFFM0IsSUFBTSxFQUFFLFVBQVUsYUFBYSxJQUFJO0FBR25DLElBQU8sc0JBQVEsYUFBYSxDQUFDLGVBQWU7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDaEIsU0FBUztBQUFBLE1BQ1QsU0FBUyxDQUFDLGdCQUFnQixPQUFPO0FBQUEsTUFDakMsV0FBVyxDQUFDLE9BQU8sT0FBTyxNQUFNO0FBQUEsTUFDaEMsWUFBWTtBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0MsYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLHNCQUFzQjtBQUFBLE1BQ2hDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3ZDLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUVSLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ3JDLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNkO0FBQUEsTUFDRDtBQUFBLElBQ0M7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
