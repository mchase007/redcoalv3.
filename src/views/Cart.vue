<template>  
  <div class="cartBox hero is-fullheight is-medium">
     
    <div v-if="cart.length > 0">
      <div class="cart-control">
      <div @click="toShop" class="theButton2">
        <div class="flex">
        <i class="gg-arrow-left"></i>
        <span>Back to Shop</span>
        </div>
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
        <span>Shopping Cart</span>
        <span class="">Delivery Address</span>
        <span class="">Secure Payment</span>
        </div>
      </div>

      <div v-for="product in cart">
        <div class="card-content cartProduct">
          <div class="box">
            <div class="flex flex-jc-sb orderRow">
                <!-- <p>Image</p> -->
                <div class="flex flex-jc-sb">
                  <div>
                  <p>{{product.productQuantity}} {{ product.productName }}s</p>
                </div>
                
                <div>
                  <p>GHS {{ product.productPrice }}.00</p>
                  <!-- <div class="controlSet">
                    <button class="button" @click="decreaseQuantity">-</button>
                    <p class="quantity">{{product.productQuantity}}</p>
                    <button class="button" @click="increaseCartQuantity(product)">+</button>
                  </div> -->
                </div> 
                <!-- <p>{{product.addOn}}</p> -->
                <div>
                  <i class="gg-close-r" @click="removeItem(product)"></i>
                </div>
                </div>
                
                <div class="addOnRow flex flex-jc-sb" v-if="product.addOnQuantity > 0">
                  <div>
                    <p>{{product.addOnQuantity}} Banku Pack</p>
                  </div>
                  
                  <p>GHS {{product.addOnPrice}}.00</p>

                  <div>
                    <i class="gg-close-r" @click="removeAddOn(product)"></i>
                  </div>
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

    <div class="">
        
      <div v-if="cart.length > 0" class="box flex total flex-jc-sb">
        <div>
          <p>Number of Items:</p>
          <p>Total Price:</p>
          <p>Delivery:</p>
          <p>Total:</p>
        </div>
        <div>
          <p>{{cartItemLength}}</p>
          <p> GHS {{cartTotal}}</p>
          <p> Free</p>
          <strong>
            <p> GHS {{cartTotal}}</p>
          </strong>
        </div>
      </div>
    </div>
    
    <div v-if="cart.length > 0" class="next2" @click="openCheckout">
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
    removeItem(product) {
      this.$store.commit('deleteFromCart',product);
    },
    removeAddOn(product) {
      this.$store.commit('removeAddOn',product);
    },
    toShop() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>