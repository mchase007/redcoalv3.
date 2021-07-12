<template> 
  <nav>
    <div class="container">    
      <div class=""> 
        <div class="mealList" >
          <div class="mealItem" v-for="product in products" :key="product.id">
            <router-link ref="link" :to="{ name:'Product', params: { id: product.productID}}" @click="selectMeal(product)">{{product.productName}}</router-link>
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
    },
    meal() {
      return this.$store.state.meal;
    }
  },
  methods: {
    selectMeal(usermeal) {
      this.Active = true;
      this.$store.commit('selectMeal', usermeal);
    },
  }
}
</script>

<style lang='scss'>

</style>