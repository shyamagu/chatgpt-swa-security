import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },

  preprocess: [vitePreprocess({})],
};
