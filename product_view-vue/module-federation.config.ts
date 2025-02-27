export const mfConfig = {
  name: "product_view_vue",
  filename: "remoteEntry.js",
  exposes: {
    "./mountProductView": "./src/productView/mountProductView",
  },
  remotes: {
    mainApp: "main_app@http://localhost:3000/remoteEntry.js",
  },
  shared: {
    vue: { singleton: true, eager: true, requiredVersion: "3.2.19" },
    'mobx-vue-lite': { singleton: true, eager: true, requiredVersion: "0.4.3" },
  },
};
