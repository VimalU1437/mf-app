export const mfConfig = {
  name: "product_list",
  filename: "remoteEntry.js",
  exposes: {
    "./productCoupled": "./src/productCoupled/productCoupled",
  },
  remotes: {
    mainApp: "main_app@http://localhost:3000/remoteEntry.js",
    productViewVue: "product_view_vue@http://localhost:3002/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "18.3.1" }, // Singleton for React
    'react-dom': { singleton: true, eager: true, requiredVersion: "18.3.1" }, // Singleton for ReactDOM
  },
};
