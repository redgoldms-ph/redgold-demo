<template>
  <div :class="{ 'active': hasScrolled, 'demo-header mb-7': true }">
    <div class="right-side">
      <div class="flex items-center gap-2 mr-5 whitespace-nowrap">
        <AvatarGroup>
          <Avatar :image="Avatar" shape="circle" />
          <Avatar :image="Avatar2" shape="circle" />
          <Avatar :image="Avatar3" shape="circle" />
        </AvatarGroup>
        <span class="text-slate-400">Online Users</span>
        <span>20,000</span>
      </div>
      <div class="news-wrapper flex items-center gap-2">
        <span class="pi pi-megaphone"></span>
        <div class="announcement-slide">
          <marquee scrollamount="3">{{ $t(newsText) }}</marquee>
        </div>
      </div>
    </div>
    <div class="left-side">
      <LangMenu/>
      <div class="money">
        <div>100,000</div>
        <i class="fa-solid fa-arrows-rotate cursor-pointer"></i>
      </div>
      <Avatar @click="toggle" :image="Avatar" class="mr-2 cursor-pointer desktop" size="large" shape="circle" />
    </div>
    <div class="news-wrapper-2 mobile items-center gap-2 mt-2">
      <div class="flex items-center">
        <marquee scrollamount="3">{{ $t(newsText) }}</marquee>
      </div>
    </div>
  </div>
  <Menu :model="items" class="lang-menu" popup ref="op" />
</template>
<script>
import Avatar from "@/assets/img/icons/user.png"
import Avatar2 from "@/assets/img/icons/user2.png"
import Avatar3 from "@/assets/img/icons/user3.png"
export default {
  data() {
    return {
      Avatar,
      Avatar2,
      Avatar3,
      newsText:"Experience the thrill of winning at our premier online casino, where Baccarat enthusiasts can enjoy an authentic and exhilarating gaming experience right from the comfort of their own home!",
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