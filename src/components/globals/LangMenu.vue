<template>
  <!-- <Button @click="toggle" icon="pi pi-globe" text rounded severity="secondary" class="text-white lang-btn desktop"
    aria-label="Filter" /> -->
  <Button @click="handleModalToggle(true)" icon="pi pi-globe" text rounded severity="secondary"
    class="text-white lang-btn" aria-label="Filter" />
  <Menu :model="items" class="lang-menu" popup ref="userMenu" />
  <Dialog v-model:visible="isModalOpen" modal :header="$t('Choose a language')"
    :breakpoints="{ '2000px': '40vw', '800px': '90vw', '500px': '90vw' }">
    <Menu :model="items" class="lang-menu" />
  </Dialog>
</template>
<script>
import GameCard from './GameCard.vue';
export default {
  data() {
    return {
      items: [
        { 
          label: 'English', 
          command: ()=>{
            this.handleLangChange("en")
          }
        },
        { 
          label: '한국어',
          command: ()=>{
            this.handleLangChange("kr")
          }
         },
        { 
          label: '中文', 
          command: ()=>{
            this.handleLangChange("cn")
          }
        },
        { 
          label: '日本語', 
          command: ()=>{
            this.handleLangChange("jp")
          }
        },
        { 
          label: 'Tiếng Việt', 
          command: ()=>{
            this.handleLangChange("vn")
          }
        }
      ],
      isModalOpen: false
    };
  },
  components: {
    GameCard
  },
  methods: {
    toggle(event) {
      this.$refs.userMenu.toggle(event);
    },
    handleModalToggle(bool) {
      this.isModalOpen = bool
    },
    handleLangChange(data) {
      const locale = data
      this.$i18n.locale = locale;
      localStorage.setItem('locale', locale);
      this.handleModalToggle(false)
    },
  }
}
</script>