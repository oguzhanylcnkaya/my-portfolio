import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/style.css';
import './assets/style/lightbox.min.css'
import i18n from './i18n'

createApp(App).use(i18n).use(store).use(router).mount('#app')
