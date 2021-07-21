import { createApp } from 'vue' 
import App from './App.vue'
import router from './router'
import store from './store'

import mitt from 'mitt'
const emitter = mitt()
require('@/assets/scss/style.scss');
require('@/assets/scss/main.scss');

const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(store).use(router).mount('#app');
