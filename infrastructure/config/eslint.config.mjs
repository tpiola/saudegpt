import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "e2e/**",
    "playwright-report/**",
    "test-results/**",
  ]),
]);

for (const cfg of eslintConfig) {
  if (cfg.name === "next") {
    cfg.rules = {
      ...cfg.rules,
      "react/display-name": "off",
      "react/no-unescaped-entities": "warn",
      "react-hooks/rules-of-hooks": "warn",
    };
  }
  if (cfg.name === "next/core-web-vitals") {
    cfg.rules = {
      ...cfg.rules,
      "@next/next/no-html-link-for-pages": "off",
    };
  }
  if (cfg.plugins && cfg.plugins["@typescript-eslint"]) {
    cfg.rules = {
      ...cfg.rules,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off",
    };
  }
}

export default eslintConfig;
