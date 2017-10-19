module.exports = {
  "extends": "react-app",
  "plugins": [
    "prettier"
  ],
  "rules": {
    "no-extra-semi": "error",
    "no-console": "warn",
    "no-var": "error",
    "one-var": ["error", "never"],
    "no-unused-vars": "error",
    "no-return-assign": "warn",
    "object-shorthand": [
      "error", 
      "always",
      { "avoidExplicitReturnArrows": true }
    ],
    "prefer-const": [
      "error", 
      { "destructuring": "all" }
    ],
    "semi": [ "error", "always" ],
    "prettier/prettier": "error"
  }
}
