import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// prettier-ignore
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				login: resolve(__dirname, "index.html"),
				dashboard: resolve(__dirname,"source/assets/views/dashboard.html"),
				report: resolve(__dirname, "source/assets/views/report.html"),
				map: resolve(__dirname, "source/assets/views/map.html"),
			},
		},
	},
});
