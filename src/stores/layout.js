import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    cardTheme: 0
  }),
  getters: {
    getCardTheme: (state) => state.cardTheme
  },
  actions: {
    setCardTheme(data) {
      this.cardTheme = data
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counter',
        storage: localStorage,
        paths: ['cardTheme']
      }
    ]
  }
})
