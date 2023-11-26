import { collection, getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import getFirebaseConfig from '../services/firebase'

const db = getFirestore(firebase.initializeApp(getFirebaseConfig()))

const col = collection(db, import.meta.env.VITE_COLLECTION)

export default col
