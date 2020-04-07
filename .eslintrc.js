module.exports = {
  "extends": [
    "eslint:recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "simple-import-sort"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "printWidth": 90
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "comma-dangle": 0,
    "simple-import-sort/sort": "error",
    "max-len": 0,
    "multiline-ternary": ["error", "always-multiline"],
    "no-console": 0
  }
}