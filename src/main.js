import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import on your project (less then 1KB gziped)
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(router)

app.mount('#app')
