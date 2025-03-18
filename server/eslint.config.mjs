import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import _import from "eslint-plugin-import";
import editorconfig from "eslint-plugin-editorconfig";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsdoc/recommended",
        "plugin:jsdoc/recommended-error",
        "plugin:jsdoc/recommended-typescript",
        "plugin:import/recommended",
        "prisma",
        "plugin:editorconfig/all",
        "prettier",
    )),

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        jsdoc: fixupPluginRules(jsdoc),
        import: fixupPluginRules(_import),
        editorconfig: fixupPluginRules(editorconfig),
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "jsdoc/check-tag-names": "off",
        "no-console": "warn",
        indent: ["warn", 2],
        quotes: ["warn", "single"],
        semi: ["warn", "always"],
        "import/no-unresolved": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
}]);