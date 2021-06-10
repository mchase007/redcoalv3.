<template>
  <nav class="tabs productNav">
    <div class="container mobile flex flex-jc-c">    

      <div class="mealbox is-small" v-for="product in products" :key="product.id">
        <div class="">
          <!-- <div class="content is-medium">
            <button class="button is-primary is-light is-outlined" @click="selectMeal(product)">{{product.productName}}</button>
          </div> -->
      <div>
        <router-link :to="{ name:'Product', params: { id: product.productID}}" @click="selectMeal(product)">{{product.productName}}</router-link>
      </div>
        </div>
      </div>

    </div>
  </nav>  
</template> 
 
<script>
 
export default {
  name: "ProductList",
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    selectMeal(usermeal) {
      this.$store.commit('selectMeal', usermeal);
      this.$store.commit('productViewTask');
    },
  }
}
</script>

<style lang='scss'>


</style>