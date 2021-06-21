<template>  
  <div class="cartBox">
    
    <div v-if="cart.length > 0">
      <div class="cart-control">
      <div class="theButton2">
        <router-link to="/">
        <div class="flex">
        <i class="gg-arrow-left"></i>
        <span>Back to Shop</span>
        </div>
        </router-link>
      </div>

      <div>
        Basket items: {{cartItemLength}}
      </div>
      </div>

      <div class="map flex flex-fd-c">
        <div class="indicators flex flex-jc-sb">
          <div class="lng lat"></div>
          <div class="lng"></div>
        <div class="lng"></div>
        </div>
        <div class="labels flex flex-jc-sb">
        <span>Cart</span>
        <span class="">Delivery</span>
        <span class="">Payment</span>
        </div>
      </div>

      <div v-for="product in cart">
        <div class="card-content cartProduct">
          <div class="box">
            <div class="flex flex-jc-sb">
                <p>Image</p>
                <p>{{ product.productName }}</p>
                
                <div>
                  <p>GHS {{ product.productPrice }}</p>
                  <!-- <div class="controlSet">
                    <button class="button" @click="decreaseQuantity">-</button>
                    <p class="quantity">{{product.productQuantity}}</p>
                    <button class="button" @click="increaseCartQuantity(product)">+</button>
                  </div> -->
                  <p>Quantity: {{product.productQuantity}}</p>
                </div> 
                <!-- <p>{{product.addOn}}</p> -->
                <div>
                  <button @click="removeItem(product)">Delete</button>
                </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div v-if="cart.length === 0">
      <div class="cart-control">
      <div class="theButton2">
        <router-link to="/">
        <div class="flex">
        <i class="gg-arrow-left"></i>
        <span>Back to Shop</span>
        </div>
        </router-link>
      </div>
      <div>
        Basket items: {{cartItemLength}}
      </div>
    </div>
      <p>There are no items in cart</p>
      <div class="space"></div>
    </div>


    
    <div v-if="cart.length > 0" class="next" @click="openCheckout">
      Complete Address
    </div>
  </div>
  <CompletePurchase></CompletePurchase>
</template>

<script>
import CompletePurchase from '@/components/CompletePurchase.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    CompletePurchase,
    Header,
  },
  data() {
    return {

    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    },
    isRemoved() {
      return this.$store.state.remove
    },
    cartItemLength() {
      return this.$store.getters.cartLength
    }
  },
  methods: {
    openCheckout() {
      this.$store.commit('openCheckout');
    },
    decreaseQuantity() {
      this.$store.commit('decreaseQuantity');
      this.$store.commit('decreasePrice');
    },
    removeItem(product) {

      this.$store.commit('deleteFromCart',product);
      // this.cart.splice(this.cart.indexOf(product), 1);
      // var index = arr.indexOf(value);
      // if (index > -1) {
      //   arr.splice(index, 1);
      // }
      // return arr;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>