# Redux Toolkit Vite Project Roadmap

## Project Setup

1. Create a new project with Vite using $ npm create vite@latest and follow the prompts.
2. Install Redux Toolkit and React Redux with $ npm install @reduxjs/toolkit react-redux
3. Install the Redux DevTools browser extension.
4. Install tailwindcss with $ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
5. Configure the tailwindcss with $ npx tailwindcss init -p
6. Configure tsconfig with required compiler options

## Project Initiation

1. First we create the store with the configureStore function from Redux Toolkit.
2. Second we configure redux store.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
