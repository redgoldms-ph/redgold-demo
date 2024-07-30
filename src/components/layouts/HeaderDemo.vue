<template>
  <div :class="{ 'active': hasScrolled, 'demo-header mb-7': true }">
    <div class="right-side">
      <span class="pi pi-megaphone"></span>
      <div class="announcement-slide">
        <marquee>{{ newsText }}</marquee>
      </div>
    </div>
    <div class="left-side">
      <div class="money">
        <i class="fa-solid fa-won-sign"></i>
        <div>100,000</div>
      </div>
      <Button @click="toggle" icon="fa-solid fa-circle-user" text rounded severity="secondary"
        class="text-white desktop" aria-label="Filter" />
      <LangMenu/>
    </div>
  </div>
  <Menu :model="items" class="lang-menu" popup ref="op" />
</template>
<script>
export default {
  data() {
    return {
      newsText:this.$t("Experience the thrill of winning at our premier online casino, where Baccarat enthusiasts can enjoy an authentic and exhilarating gaming experience right from the comfort of their own home!"),
      items: [
        { 
          label:'Mia Taylor',
          icon: 'pi pi-user',
          command: ()=>{
            console.log('tesst')
          } 
        },
        { 
          label: this.$t('Sign Out'),
          icon: 'pi pi-sign-out',
          command: ()=>{
            this.$router.push('/')
          }  
        }
      ],
      hasScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      const specificScrollY = 30;
      this.hasScrolled = scrollPosition >= specificScrollY;
    },
    handleModalToggle(bool){
      this.isModalOpen = bool
    }
  }
}
</script>