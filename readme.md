# How to build the project

Install dependencies:

```sh
npm install
```

Run in hot module reloading mode (very long the first time):

```sh
npm start
```

Create a production build (in docs directory, so that it can used as a GitHub Page):

```sh
npm run build
```

Serve production build:

```sh
npx serve docs
```

# Developers

Add new wasm functions to `src/lib.rs`.

These wasm functions can be called from javascript, usually by adding a function
to `html/js/index.js` under the `threshold_crypto wasm calls` section.
