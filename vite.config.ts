import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "none",
            startKeycloakOptions: {
                extensionJars: [
                    "./providers/hidpdbugreproduce-26.2.4.jar"
                ]
            }
        })
    ]
});
