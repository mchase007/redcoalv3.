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

      <div @click="superPack" class="theButtonz">
        <span>
          Super Pack   
        </span> 
        <div>
          <span><i v-if="!extras" class="gg-arrow-down-r"></i></span>
          <span><i v-if="extras" class="gg-arrow-up-r"></i></span>
        </div>
      </div>

      <div v-if="extras" class="extraSet">
        <p v-if="!userMeal.addOnQuantity > 0">Banku with Pepper:  GHS 5.00</p>
        <p v-if="userMeal.addOnQuantity > 0">Banku with Pepper:  GHS {{userMeal.addOnPrice}}.00</p>
        <div class="controlSet">
          <div class="button btn2" @click="decreaseQuantity1">-</div>
          <p class="quantity">{{userMeal.addOnQuantity}}</p>
          <div class="button btn2" @click="increaseQuantity1">+</div>
        </div>
      </div>

      <div v-if="extras" class="extraSet">
        <p v-if="!userMeal.addOnQuantity2 > 0">Lemon flavored Sobolo 500ml:  GHS 2.00</p>
        <p v-if="userMeal.addOnQuantity2 > 0">Lemon flavored Sobolo 500ml:  GHS {{userMeal.addOnPrice2}}.00</p>
        <div class="controlSet">
          <div class="button btn2" @click="decreaseQuantity2">-</div>
          <p class="quantity">{{userMeal.addOnQuantity2}}</p>
          <div class="button btn2" @click="increaseQuantity2">+</div>
        </div>
      </div>
      
      <div class="is-size-5 packList" >
        <p>What you get</p>
        <ol type="1">
          <li> 
            Grilled {{userMeal.productID}} kebab: {{userMeal.productQuantity}} 
          </li>
          <li>
            Bottled water.
          </li>
          <li>
            Mint.
          </li>
          <li v-if="userMeal.addOnQuantity > 0">
            Banku with pepper pack: {{userMeal.addOnQuantity}}
          </li>
          <li v-if="userMeal.addOnQuantity2 > 0">
            Lemon flavored Sobolo: {{userMeal.addOnQuantity2}}
          </li>
        </ol>
      </div>

      <p class="is-size-5 more" :class="{pack: pack}">{{userMeal.productDescription}}</p>

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
      this.$store.commit('increasePrice');
    },
    increaseQuantity1() {
      this.$store.commit('increaseQuantity1');
      this.$store.commit('increasePrice1');
    },
    decreaseQuantity1() {
      this.$store.commit('decreaseQuantity1');
      this.$store.commit('decreasePrice1');
    },
    increaseQuantity2() {
      this.$store.commit('increaseQuantity2');
      this.$store.commit('increasePrice2');
    },
    decreaseQuantity2() {
      this.$store.commit('decreaseQuantity2');
      this.$store.commit('decreasePrice2');
    },  
    viewPack() {
      console.log('View Pack')
      this.pack = !this.pack 
    },
    superPack() {
      this.extras = !this.extras 
     },
  },

}
</script>

<style lang='scss'>

</style>