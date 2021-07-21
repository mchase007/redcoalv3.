 <template>
   <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
    </div>
    <div class="hero-body contact-form">
      <div class="heroOne">
  
    <div class="container has-text-centered">
      <div class="columns is-centered is-vcentered mobile-flex">
        
        <!-- <div class="columns is-centered is-vcentered mobile-flex"> -->
          <!-- <div class="column is-half"> -->
            <!-- <figure class="image">
              <img class="hero-image" src="../assets/images/kebabstandsausage.png" alt="">
            </figure> -->
          <!-- </div> -->

          <div class="column item">
            <p class="is-size-4-mobile is-size-3-tablet has-text-weight-semibold is-capitalized title">
              Kebab affairs for huge Events?
            </p>
            <p class="is-size-5 subtitle">Get the most affordable meat deal for your weddings, parties, funerals, end of school parties and more of any size.</p>
            <p class="is-size-5">Simply tell us how you want it and it is done.</p>
            <br>
            <p class="flex flex-fd-c is-size-6">
              <!-- <span class="is-size-6">Bulk </span> -->
              <!-- <span>Everyday</span> -->
              <!-- <span>4pm - 11pm</span> -->
            </p>

            <br>

            <div class="button is-fullwidth is-size-5 is-primary">
                      <a><router-link to="/contact-us">Talk to us</router-link></a>
              <!-- <router-link :to="{ name:'Product', params: { id: product.productID}}" @click="selectMeal(product)">Order Now</router-link> -->
              <!-- Coming Soon -->
            </div>
          </div>

        <!-- </div> -->
        
        
      </div>

      
    </div>
 
    
    </div>
    </div> 
    <div class="hero-foot">
    </div>
  </section>
 </template>
 
 <script>
  import Header from '@/components/Header.vue'

 export default {
  name: "Bulk",
  
  components: {
    Header,
  },
  
  data() {
    return {
    }  
  }, 
  mounted() {

  },
  methods: {
  },
 }
 </script>
 
 <style>
 
 </style>