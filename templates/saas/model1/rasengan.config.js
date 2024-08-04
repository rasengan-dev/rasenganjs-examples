import { defineConfig } from 'rasengan';

export default defineConfig({
  reactStrictMode: true,

  server: {
    production: {
      hosting: "vercel"
    }
  }
});
