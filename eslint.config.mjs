import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      // Ignore generated Prisma client/wasm bundles which include patterns
      // that violate some ESLint rules (require(), this aliasing, etc.).
      // These files are generated and should not be linted.
      "lib/generated/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
