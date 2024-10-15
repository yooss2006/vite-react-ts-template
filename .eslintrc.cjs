const { rules } = require("eslint-plugin-prettier");

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      settings: {
        react: { version: "detect" },
        "import/resolver": {
          typescript: {},
        },
      },
      extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "linebreak-style": ["error", "unix"],
        "no-unused-expressions": "warn",
        "no-param-reassign": [
          "error",
          {
            props: false,
          },
        ],

        "import/no-cycle": "error",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
            ],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "import/no-anonymous-default-export": "off",

        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",

        "jsx-a11y/anchor-is-valid": "off",

        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],

        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
