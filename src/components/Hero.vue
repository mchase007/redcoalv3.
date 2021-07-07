<template>
    <div class="heroOne">
  
    <div class="container has-text-centered">
      <p class="title">
        Control the vibe with more kebab!
      </p>
      <p class="subtitle flex flex-fd-c">
        <span class="is-size-6">Working Hours:</span>
        <span>Everyday</span>
        <span>4pm - 11pm</span>
      </p>
    </div>
 
    <div class="button is-primary">
      <router-link :to="{ name:'Product', params: { id: product.productID}}" @click="selectMeal(product)">Order Now</router-link>
    </div>
    </div>

</template>

<script>
export default {
  name: "Hero",
  computed: {
    product() {
      return this.$store.state.products[0];
    }
  },
  methods: {
    selectMeal(usermeal) {
      this.$store.commit('selectMeal', usermeal);
    },
  }
}
</script>

<style>

</style>