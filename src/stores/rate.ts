import { defineStore } from 'pinia'
import { useDocument } from 'vuefire'
import col from '@/services/firestore'
import { doc } from 'firebase/firestore'
import { computed, ref } from 'vue'

export const useRateStore = defineStore('rates', () => {
  
  const rateDocRef = computed(() => doc(col, import.meta.env.VITE_DOCID))
  const rate = useDocument(rateDocRef)
  const { promise } = rate;
  const purchasePrice = ref(0.0)
  const salePrice = ref(0.0)
  
  promise.value.then((value) => {
    purchasePrice.value = value?.purchase_price;
    salePrice.value = value?.sale_price;
  })

  return { rate, purchasePrice, salePrice }
})