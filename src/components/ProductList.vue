<template>
  <nav>
    <div class="container">    
      <div class="">
        <div class="mealList" >
          <div class="mealItem button is-outlined" ref="link" v-for="product in products" :key="product.id">
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
  mounted() {
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    selectMeal(usermeal) {
      this.$store.commit('selectMeal', usermeal);
    },
  }
}
</script>

<style lang='scss'>


</style>

:class="{isPrimary: $refs.link.$els.classList.contains('router-link-active')}"