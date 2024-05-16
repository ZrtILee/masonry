import './assets/main.css'
import './utils/themeMedia.ts'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

createApp(App)
    .use(router)
    .mount('#app')
