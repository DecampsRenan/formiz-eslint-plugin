import { ESLint } from "eslint";
import { noEmptyUseForm } from "./rules/no-empty-use-form";

const pluginConfig: ESLint.Plugin = {
  rules: {
    'no-empty-use-form': noEmptyUseForm
  }
}

module.exports = pluginConfig