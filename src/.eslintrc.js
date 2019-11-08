module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "prettier", "react", "only-warn"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "max-lines": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "prettier/prettier": [1, { singleQuote: true }],
    "react/jsx-props-no-spreading": 0,
    'no-console': 0
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  globals: {
    __DEV__: true
  }
};
