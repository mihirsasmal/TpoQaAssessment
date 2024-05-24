import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  projectId: "sda137",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
