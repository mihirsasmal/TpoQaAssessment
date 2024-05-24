import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  projectId: "sda137",
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
