<template> 
    <div class="heroOne" :class="{open: isOpen}">
  
    <div class="container has-text-centered">
      <div class="columns is-centered is-vcentered mobile-flex">
        
        <!-- <div class="columns is-centered is-vcentered mobile-flex"> -->
          <div class="column is-half">
            <figure class="image">
              <img class="hero-image" src="../assets/images/kebabstandsausage.png" alt="">
            </figure> 
          </div>

          <div class="column item is-half">
            <p class="is-size-4-mobile is-size-3-tablet has-text-weight-semibold is-capitalized title">
              Say goodbye to boring hangouts
            </p>
            <p class="is-size-5 subtitle">Spice every moment with kebab from the comfort of your couch, with the wallet of your choice.</p>
            <p class="is-size-5">+ FREE water, mint and delivery.</p>
            <br>
            <p class="flex flex-fd-c is-size-6">
              <span class="is-size-6">Working Hours:</span>
              <span>Monday - Saturday</span>
              <span>5pm - 10pm</span>
            </p>

            <br>

            <div class="button is-fullwidth is-size-5 is-primary">
              <router-link :to="{ name:'Product', params: { id: product.productID}}" @click="selectMeal(product)">Order Now</router-link>
            </div>
          </div>

        <!-- </div> -->
        
        
      </div>

      
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
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    this.emitter.on("display", open => {
      this.isOpen = open
    })
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