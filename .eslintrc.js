module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true
  },
  "settings": {
        "ecmascript": 6,
        "jsx": true
  },
  "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    "semi": 0,
    "comma-dangle": 0,
    "react-hooks/exhaustive-deps": "none"
  },
  "globals": {
    "it": true,
    "test": true,
    "expect": true,
    "afterEach": true,
    "jest": true,
    "describe": true,
    "beforeAll": true,
    "afterAll": true,
  }
};