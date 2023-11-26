import { collection, getFirestore } from 'firebase/firestore'
import firebaseApp from './firebase'

const db = getFirestore(firebaseApp)

const col = collection(db, import.meta.env.VITE_COLLECTION)

export default col