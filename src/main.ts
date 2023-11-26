import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import firebase from 'firebase/compat/app'
import getFirebaseConfig from './services/firebase'
const app = createApp(App)
const pinia = createPinia()

app.use(VueFire, {
  firebaseApp: firebase.initializeApp(getFirebaseConfig()),
  modules: [VueFireFirestoreOptionsAPI()],
})

app.use(pinia)

app.mount('#app')
