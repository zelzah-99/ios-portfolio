import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/repository-name/", // IMPORTANT: Uncomment this and change 'repository-name' to your exact Github Repo name BEFORE deploying! (Leave blank if deploying to <username>.github.io)
});
