module.exports = {
  "extends": "airbnb-base",
  "globals": {
  },
  "rules": {
      // generic rules
        "indent": ["error", 2, {
            "SwitchCase": 1
        }],
      "max-len": ["error", {
          "code": 120
      }],
      "comma-dangle": ["error", "never"]
  }
};