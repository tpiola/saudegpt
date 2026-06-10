import { defineConfig, globalIgnores } from "eslint/config";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "e2e/**",
    "infrastructure/**",
    "playwright-report/**",
    "test-results/**",
  ]),
]);

for (const cfg of eslintConfig) {
  if (cfg.plugins && cfg.plugins["@typescript-eslint"]) {
    cfg.rules = {
      ...cfg.rules,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off",
    };
  }
}

export default eslintConfig;
