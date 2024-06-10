import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles 
import './assets/base/base.scss';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
