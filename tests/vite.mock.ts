import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Isolated test server: never read the owner's .env.local or contact production.
export default defineConfig({
  plugins: [react()],
  envDir: false,
  define: {
    "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
      "https://maharati-test.supabase.co",
    ),
    "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(
      "sb_publishable_mock_for_local_tests_only",
    ),
  },
});
