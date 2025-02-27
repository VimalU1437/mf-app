import { createApp } from "vue";

import "../index.css";

import ProductView from "./ProductView.vue";


export default function mountProductView(elem: any) {
    createApp(ProductView).mount(elem);
};

