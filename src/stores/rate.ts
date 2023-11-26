import { defineStore } from 'pinia'
import { useDocument } from 'vuefire'
import col from '@/services/firestore'
import { doc } from 'firebase/firestore'
import { computed, ref } from 'vue'

export const useRateStore = defineStore('rates', () => {
  const rateDocRef = computed(() => doc(col, import.meta.env.VITE_DOCID))
  const rate = useDocument(rateDocRef)

  return { rate }
})
