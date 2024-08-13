<template>
  <Button severity="danger" class="cursor-pointer" :label="$t('Try Now')" @click="login" />
</template>
<script>
import { api } from '@/axios/api'

export default {
  data() {
    return {

    }
  },
  methods: {
    async login() {
      const gameType = "casino"
      try {
        const res = await api.login({
            gameType : gameType,
            lang : this.$i18n.locale
          }
        )
        window.open(res.data.data.url, '_blank');
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>