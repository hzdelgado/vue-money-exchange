import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { VueFire } from 'vuefire'
import firebaseApp from './services/firestore'
const app = createApp(App)
const pinia = createPinia()

app.use(VueFire, {
    firebaseApp,
})

app.use(pinia)

app.mount('#app')
