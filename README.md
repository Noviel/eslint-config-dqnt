# eslint-config-dqnt

Eslint config based on [create-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app) with some tweaks and included [prettier](https://github.com/prettier/prettier).

## Installation

```sh
yarn add eslint prettier eslint-config-dqnt --dev
```

or

```sh
npm install eslint prettier eslint-config-dqnt --save-dev
```

## Usage

Create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": "dqnt"
}
```

Create a file named `.prettierrc` with prettier settings best fit your preferences:

```json
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "es5"
}
```
