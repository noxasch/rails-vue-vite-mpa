import { defineConfig } from 'vite'
import ViteRubyPlugin from 'vite-plugin-rails'
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"

export default defineConfig({
  plugins: [
    ViteRubyPlugin({stimulus: false},),
    vue(),
    vuetify()
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    },
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".sass",
      ".scss",
      ".css",
      ".png",
      ".svg",
    ],
  },
  appType: "mpa",
  clearScreen: false,
})
