import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/style.css';
import './assets/style/lightbox.min.css'

createApp(App).use(store).use(router).mount('#app')
