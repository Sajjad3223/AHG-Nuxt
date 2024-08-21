// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  ssr: true,
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vue-toastification"],
  },
  app: {
    head: {
      link: [
        { rel: "shortcut icon", href: "/Logomark.png" },
        { rel: "icon", href: "/Logomark.png" },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: false,
    },
  },
});
