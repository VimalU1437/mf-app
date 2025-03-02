export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {
    "./cartPage": "./src/cart/CartPage",
  },
  remotes: {
    mainApp: "main_app@http://localhost:3000/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "18.3.1"}, // Singleton for React
    "react-dom": { singleton: true, eager: true, requiredVersion: "18.3.1"}, // Singleton for ReactDOM
  },
};
