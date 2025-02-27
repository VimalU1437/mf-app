export const mfConfig = {
  name: "main_app",
  filename: "remoteEntry.js",
  exposes: {
    "./mobXStore": "./src/store/mobXstore",
    "./types": "./src/types",
    './spinner': './src/spinner/spinner',
    './error': './src/error/Error',
  },
  remotes: {
    productList: "product_list@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "18.3.1"}, // Singleton for React
    "react-dom": { singleton: true, eager: true, requiredVersion: "18.3.1"}, // Singleton for ReactDOM
    mobx: {
      singleton: true,
      strictVersion: true,
      eager: true,
    },
    "./src/store/mobXstore": {}
  },
};
