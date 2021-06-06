<template>
  <nav class="tabs productNav">
    <div class="container mobile flex flex-jc-c">    
      <!-- <div class="mealbox" v-for="meal in meals" :key="meal.id">
        {{ meal.title }}
        <form>
          <label>Size</label>
          <select :packSize="itemSize" id="size">
            <option value="Mini">Mini</option>
            <option value="Regular">Regular</option>
            <option value="Large">Large</option>
          </select>
        </form>
        <button 
          class="snipcart-add-item"
          :data-item-id="itemID"
          :data-item-price="itemPrice"
          :data-item-url="itemUrl"
          :data-item-description="itemDescription"
          :data-item-image="itemImage"
          :data-item-name="itemName"
          data-item-custom1-name="Pack Size"
          data-item-custom1-options="Mini|Regular[+10.00]|Large[+20.00]"
          :data-item-custom1-value="itemSize">
        Add to Cart</button>
      </div> -->

      <div class="mealbox card is-medium" v-for="product in products" :key="product.id">
        <div class="card-content">
          <div class="media">
          <div class="">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          </div>
          <div class="content is-medium">
            <p>{{product.productName}}</p>
            <p>From GHS 10.00</p> 
            <button class="button is-primary is-light is-outlined" @click="$emit('updateCart', product)">Add to cart</button>

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
      cart2: [],
      active: {
        product_drawer: false
      } 
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {

  }
}
</script>

<style lang='scss'>
.mobile {
  flex-wrap: wrap;
  text-align: left;
  
}

.mealbox {
  width: 70%;
  border: 2px solid #731739;
  margin-bottom: 20px;
}

@media only screen and (min-width: 630px) {  
  .mealbox {
    width: 30%;
    margin-bottom: 0;
    margin-right: 20px;
  }
}

</style>