module.exports = {
  "parser": "babel-eslint",
  "globals": {
    "Promise": true,
    "Map": true,
    "specs": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "react"
  ],
  "extends": "react-app",
  "rules": {
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "no-console": 0,
    "keyword-spacing": 2,
    "newline-per-chained-call": [2, {"ignoreChainWithDepth": 2 }],
    "no-extra-semi": 2,
    "no-mixed-operators": 0,
    "no-return-assign": 2,
    "no-unused-vars": 2,
    "no-var": 2,
    "object-shorthand": [2, "methods"],
    "one-var": [2, "never"],
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": false
    }],
    "semi": [
      2,
      "always"
    ],
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2
  }
};
