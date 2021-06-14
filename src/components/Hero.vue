<template>
    <div class="heroOne">

    <div class="container has-text-centered">
      <p class="title">
        Title
      </p>
      <p class="subtitle">
        Subtitle
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