<template>
    <div v-if="product" class="absolute top-36">
        <header class="bg-gradient-to-r from-orange-600 to-black p-4">
            <h4 class="text-xl font-bold">ProductView</h4>
            <p class="text-sm">Build with vue</p>
            <p class="text-sm">Source: Product View</p>
        </header>
        <div class="top-0 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div class="flex gap-6">
                <img :src="product.thumbnail" :alt="product.title" class="w-48 h-48 object-cover rounded" />
                <div>
                    <h1 class="text-2xl font-bold">{{ product.title }}</h1>
                    <p class="text-gray-600">{{ product.description }}</p>
                    <p class="mt-2 text-lg font-semibold text-gray-800">${{ product.price }}</p>
                    <p class="text-sm text-red-500">Discount: {{ product.discountPercentage }}%</p>
                    <p class="text-sm text-gray-700">Stock: <span :class="{ 'text-red-500': product.stock < 10 }">{{
                        product.availabilityStatus }}</span></p>
                    <p class="text-sm text-gray-500">Brand: {{ product.brand }}</p>
                </div>
            </div>

            <div class="mt-6">
                <h2 class="text-xl font-semibold">Product Details</h2>
                <ul class="list-disc list-inside text-gray-600">
                    <li>SKU: {{ product.sku }}</li>
                    <li>Weight: {{ product.weight }}g</li>
                    <li>Dimensions: {{ product.dimensions.width }} x {{ product.dimensions.height }} x {{
                        product.dimensions.depth }} cm</li>
                    <li>Warranty: {{ product.warrantyInformation }}</li>
                    <li>Shipping: {{ product.shippingInformation }}</li>
                    <li>Return Policy: {{ product.returnPolicy }}</li>
                    <li>Minimum Order: {{ product.minimumOrderQuantity }}</li>
                </ul>
            </div>

            <div class="mt-6">
                <h2 class="text-xl font-semibold">Reviews</h2>
                <div v-if="product.reviews.length > 0" class="mt-4 space-y-4">
                    <div v-for="review in product.reviews" :key="review.reviewerEmail" class="p-4 border rounded">
                        <p class="text-yellow-500">Rating: {{ review.rating }}/5</p>
                        <p class="text-gray-800 italic">"{{ review.comment }}"</p>
                        <p class="text-sm text-gray-500">- {{ review.reviewerName }}</p>
                    </div>
                </div>
                <p v-else class="text-gray-500">No reviews yet.</p>
            </div>

            <div class="mt-6 flex items-center space-x-4">
                <img :src="product.meta.qrCode" alt="QR Code" class="w-24 h-24" />
                <p class="text-gray-500">Barcode: {{ product.meta.barcode }}</p>
            </div>
            <button @click="addToCart"
                class="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import sharedStore from 'mainApp/mobXStore';
import { reaction } from 'mobx';

export default {
  setup() {
    // Use a ref property to reactively access the MobX store
    const product = ref(sharedStore.productViewValue);
    // Add a reaction to track changes in the MobX store
    let disposeReaction;
    onMounted(() => {
      disposeReaction = reaction(
        () => sharedStore.productViewValue,
        (newValue) => {
          // Force Vue to re-render when the MobX store changes
          product.value = newValue;
        }
      );
    });

    // Clean up the reaction when the component is unmounted
    onUnmounted(() => {
      if (disposeReaction) disposeReaction();
    });

    const addToCart = () => {
        sharedStore.addProductInCart(product.value);
    };

    return {
      product,
      addToCart,
    };
  },
};
</script>