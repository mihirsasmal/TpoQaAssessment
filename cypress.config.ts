import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  projectId: "sda137",
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
  },
});
