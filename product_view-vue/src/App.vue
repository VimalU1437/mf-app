<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: product_view-vue</div>
    <div>Framework: vue3</div>
    <ProductView />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import ProductView from "./productView/ProductView.vue";

  export default defineComponent({
    components: {
      ProductView
    }
  });
</script>
