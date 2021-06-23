<template>
  <div class="productView container" >
    <div class="content">
      <h4 class="is-size-4 is-size-3-tablet">Charcoal Grilled {{userMeal.productName}}</h4>
      <div class="bill">
        <div>
          <h5 class="is-size-5 is-size-4-tablet" >GHS {{userMeal.productPrice}}.00</h5>
        </div>
        <div class="promo">
          <p class=" is-size-7 is-size-6-tablet">+ FREE Delivery</p>
        </div>
      </div>
      <div class="controlSet">
        <button class="button" @click="decreaseQuantity">-</button>
        <p class="quantity">{{userMeal.productQuantity}}</p>
        <button class="button" @click="increaseQuantity">+</button>
      </div>
 
      <div class="field pepper flex">
        <span>Pepper Spice:</span>
        <div class="control">
          <label class="">
            <input @click="spicey" value="" type="checkbox">
            <span>
              No Spice
            </span>
          </label>
        </div>
      </div>

      <!-- <div v-for="extra in userMeal.addOn" 
          v-bind:key="extra.extraId" class="addOns">

          <input type="checkbox" 
            class="addOn" 
            v-bind:id="extra.extraId" 
            v-bind:value="extra.extraName" 
            @change="updateExtra">{{extra.extraName}}: GHS {{extra.extraPrice}}.00
      </div> -->

      <div @click="superPack" class="theButtonz">Super Pack</div>

      <div v-if="extras" class="extraSet">
        <p v-if="!userMeal.addOnQuantity > 0">Banku with Pepper:  GHS 5.00</p>
        <p v-if="userMeal.addOnQuantity > 0">Banku with Pepper:  GHS {{userMeal.addOnPrice}}.00</p>
        <div class="controlSet">
          <div class="button btn2" @click="decreaseQuantity1">-</div>
          <p class="quantity">{{userMeal.addOnQuantity}}</p>
          <div class="button btn2" @click="increaseQuantity1">+</div>
        </div>
      </div>

      

      <!-- <div class="field">
        <div class="control addOns flex">
          <p>Add On:</p>
          <label class="addOn">
            <input @click="addOn1" value="Sobolo" class="" type="checkbox">
            redcoal Sobolo 500ml - GHS 2.00
          </label>
        </div>
      </div> -->
      <div class="is-size-5 packList" >
        <ol type="1">
          <li> 
            {{userMeal.productQuantity}} grilled {{userMeal.productID}}s
          </li>
          <li>
            A bottle of water.
          </li>
          <li>
            Mint.
          </li>
        </ol>
      </div>

      <p class="is-size-5 more" :class="{pack: pack}">{{userMeal.productDescription}}</p>
      <!-- <div class="clicker is-size-5" @click="viewPack">
        <div class="theButton" :class="{packOpen: pack}">
          <span class="buttonText">what you get</span>
          <span class="is-small">
            <i v-if="pack" class="gg-arrow-up-r"></i>
            <i v-if="!pack" class="gg-arrow-down-r"></i>
          </span>
        </div>
         
         
      </div> -->

      <span v-if="!extras" @click="viewPack" class="clicker">Extra Details</span>
      <span v-if="extras" @click="viewPack" class="clicker">Less Details</span>

    </div>
      <div class="is-primary next" @click="updateCart(userMeal)">{{isActive ? 'Added' : 'Add to Basket'}}</div>
    </div>
</template>

<script>
 
export default {
  data() {
    return {
      pack: false,
      noSpice: false,
      extras: false,
    }
  },
  components: {

  },
  computed: {
    view() {
      return this.$store.state.productView 
    },
    userMeal() {
      return this.$store.state.meal
    },
    isActive() {
      return this.$store.state.isActive
    }
  },
  mounted() {
  },
  methods: {
    updateCart(product) {
      this.$store.commit('addToCart', product);
    },
    closeProductView() {
      this.$store.commit('closeProductTask');
      console.log('product close');
    },
    decreaseQuantity() {
      this.$store.commit('decreaseQuantity');
      this.$store.commit('decreasePrice');
    },
    increaseQuantity() {
      this.$store.commit('increaseQuantity');
      this.$store.commit('increasePrice')
    },
    increaseQuantity1() {
      this.$store.commit('increaseQuantity1');
      this.$store.commit('increasePrice1')
    },
    decreaseQuantity1() {
      this.$store.commit('decreaseQuantity1');
      this.$store.commit('decreasePrice1');
    },  
    viewPack() {
      console.log('View Pack')
      this.pack = !this.pack 
    },
    superPack() {
      // console.log('View Pack')
      this.extras = !this.extras 
     },
  },

}
</script>

<style lang='scss'>

</style>