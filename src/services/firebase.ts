import firebase from 'firebase/compat/app'

function getFirebaseConfig() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'api-key-not-set',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'env-not-set',
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'env-not-set',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'env-not-set',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'env-not-set',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'env-not-set',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || 'env-not-set'
  }
  return firebaseConfig
}

const firebaseApp = firebase.initializeApp(getFirebaseConfig())

export default firebaseApp
