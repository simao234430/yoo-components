module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  extends: [ 'plugin:react/recommended', 'plugin:prettier/recommended'],


  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "project": ['./tsconfig.json'],
    "ecmaVersion": 'latest',
  },
  "plugins": [
    "react"
  ],
  "rules": {

    "indent": ["error", 2],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
