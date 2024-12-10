import withNuxt from './.nuxt/eslint.config.mjs';
import prettierPlugin from 'eslint-plugin-prettier';

// custom rules
const JsRules = {
  'import/prefer-default-export': 'off',
  'no-underscore-dangle': [
    'error',
    {
      allowAfterThis: true,
      allowAfterSuper: true,
    },
  ],
};

export default withNuxt([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,vue}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      ...JsRules,
      ...prettierPlugin.configs.rules,
    },
  },
]).override('nuxt/typescript/rules', {
  // !!! ONLY FOR naming-convention
  languageOptions: {
    parserOptions: {
      project: './.nuxt/tsconfig.json',
    },
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'typeAlias', format: ['PascalCase'], prefix: ['T'] },
      { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
      { selector: 'enum', format: ['PascalCase'], prefix: ['E'] },
      {
        selector: ['variable', 'function', 'parameter'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: ['variable'],
        types: ['boolean'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        prefix: ['is', 'IS', 'Is', 'has', 'HAS', 'Has', 'can', 'CAN', 'Can'],
      },
    ],
  },
});
