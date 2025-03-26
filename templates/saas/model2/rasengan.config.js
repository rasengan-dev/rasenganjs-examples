import { defineConfig } from 'rasengan';
import { rasengan } from 'rasengan/plugin';
import { configure } from '@rasenganjs/vercel';

export default defineConfig({
  vite: {
    plugins: [
      rasengan({
        adapter: configure({}),
      }),
    ],
  },
});
