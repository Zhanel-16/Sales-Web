import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router para navegar
import router from './router/index.js'

createApp(App).use(router).mount('#app')
