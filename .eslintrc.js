module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    // other rules...
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2015,
    // Use ecmaFeatures for specifying ECMAScript features
    ecmaFeatures: {
      modules: true,
    },
  },
  // other ESLint configurations...
};
