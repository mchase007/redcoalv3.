<template>  
  <div class="cartBox hero is-fullheight is-medium">
     
    <div v-if="cart.length > 0">
      <div class="cart-control">
      <div @click="toShop" class="theButton2">
        <div class="flex flex-ai-c">
        <i class="gg-arrow-left"></i>
        <span>Back to Shop</span>
        </div>
      </div>
 
      <div class="is-size-5 is-size-6-mobile">
        Basket items: {{cartItemLength}}
      </div> 
      </div>

      <div class="map flex flex-fd-c">
        <div class="indicators flex flex-jc-sb">
          <div class="lat">1</div>
          <div class="lng">2</div>
        <div class="lng">3</div> 
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
                <div class="flex flex-ai-c flex-jc-sb">
                  <div class="item">
                  <p class="is-size-5 is-size-6-mobile" v-if="product.meal === 'Sausage'">
                    {{product.quantity}} Santinos {{ product.meal }} kebabs <span v-if="product.spice">(Spiced)</span> <span v-else>(Not Spiced)</span>
                  </p>
                  <p class="is-size-5 is-size-6-mobile" v-else>
                    {{product.quantity}} {{ product.meal }} kebabs <span v-if="product.spice">(Spiced)</span> <span v-else>(Not Spiced)</span>
                  </p>
                  <p class="is-size-6 price has-text-weight-semibold">GHS {{ product.price }}.00</p>
                </div>
                
                <div>
                  <i class="gg-close-r " @click="removeItem(product)"></i>
                </div>
                </div>

                <div v-if="product.addOnQuantity > 0 || product.addOnQuantity2 > 0" class="extraset3"></div>
                
                <div class="addOnRow flex flex-ai-c flex-jc-sb" v-if="product.addOnQuantity > 0">
                  <div class="item">
                    <p class="is-size-5 is-size-6-mobile">{{product.addOnQuantity}} Banku Pack</p>
                    <p class="is-size-6 price has-text-weight-semibold">GHS {{product.addOnPrice}}.00</p>
                  </div>
                  

                  <div>
                    <i class="gg-close-r" @click="removeAddOn(product)"></i>
                  </div>
                </div>

                <div class="addOnRow flex flex-ai-c flex-jc-sb" v-if="product.addOnQuantity2 > 0">
                  <div class="item">
                    <p class="is-size-5 is-size-6-mobile">{{product.addOnQuantity2}} Lemon flavored sobolo</p>
                    <p class="is-size-6 price has-text-weight-semibold">GHS {{product.addOnPrice2}}.00</p>
                  </div>
                  

                  <div>
                    <i class="gg-close-r " @click="removeAddOn2(product)"></i>
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
        <div class="flex flex-ai-c">
        <i class="gg-arrow-left"></i>
        <span>Back to Shop</span>
        </div>
        </router-link>
      </div>
      <div class="is-size-5 is-size-6-mobile">
        Basket items: {{cartItemLength}}
      </div>
    </div>
      <p class="is-size-5 is-size-6-mobile">There are no items in your basket</p>
      <div class="space"></div>
    </div>

    <div class="totalContainer">     
      <div v-if="cart.length > 0" class="total">
        <div class="group1 is-size-5 is-size-6-mobile">
          <p>Number of Items:</p>
          <p>Total Price:</p>
          <p>Delivery:</p>
          <p class="has-text-weight-semibold">Total:</p>
        </div>
        <div class="group2 is-size-5 is-size-6-mobile">
          <p>{{cartItemLength}}</p>
          <p> GHS {{cartTotal}}</p>
          <h5 class="has-text-weight-semibold free"> FREE!</h5>
          <!-- <strong> -->
            <p class="has-text-weight-semibold"> GHS {{cartTotal}}</p>
          <!-- </strong> -->
        </div>
      </div>
    </div>
    
    <div v-if="cart.length > 0" class="button is-primary is-medium next2" @click="openCheckout">
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
    removeAddOn2(product) {
      this.$store.commit('removeAddOn2',product);
    },
    toShop() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>