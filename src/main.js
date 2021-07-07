import { createApp } from 'vue' 
import App from './App.vue'
import router from './router'
import store from './store'

require('@/assets/scss/style.scss');
require('@/assets/scss/main.scss');
createApp(App).use(store).use(router).mount('#app');
