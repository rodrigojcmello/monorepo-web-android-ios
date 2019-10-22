module.exports = {
  env: {
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "prettier/prettier": [1, { singleQuote: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
};
