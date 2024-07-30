<template>
  <Menu :model="items" class="side-bar">
    <template #start>
      <div @click="redirectToMobile" class="cursor-pointer">
        <img :src="LogoIcon" alt="">
      </div>
    </template>
    <template #submenulabel="{ item }">
      <span class="text-primary font-bold">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <a v-ripple class="menu-item active" v-bind="props.action">
        <div class="item-icon">
          <img :src="item.icon" alt="">
        </div>
        <span class="label">{{ $t(item.label) }}</span>
      </a>
    </template>
    <template #end>
      <div>
        <LangMenu/>
      </div>
    </template>
  </Menu>
  <Dialog v-model:visible="isModalOpen" modal :breakpoints="{ '800px': '90vw', '500px': '90vw' }">
    <!-- <Menu :model="profileItem" class="lang-menu"/> -->
    <template #container="{ closeCallback }">
      <Menu :model="profileItems" class="lang-menu"/>
      <div class="flex items-center gap-4 p-4 pt-0">
        <Button severity="danger" label="Ok" @click="closeCallback" class="w-full" />
      </div>
    </template>
  </Dialog>
</template>

<script>
import CasinoChip from "@/assets/img/icons/casino-cip.svg"
import User from "@/assets/img/icons/user.svg"
import Home from "@/assets/img/icons/home.svg"
import LogoIcon from "@/assets/img/logos/logo-icon.png"
export default {
  data() {
    return {
      LogoIcon,
      profileItems: [
        { 
          label:'Mia Taylor',
          icon: 'pi pi-user',
          command: ()=>{
            console.log('tesst')
          } 
        },
        { 
          label: 'Sign Out',
          icon: 'pi pi-sign-out',
          command: ()=>{
            this.$router.push('/')
          }  
        }
      ],
      items: [
        {
          items: [
            {
              icon: CasinoChip,
              label:"Live"
            },
            {
              icon: Home,
              label:"Home",
              command: ()=>{
                this.redirectToMobile()
              }
            },
            {
              icon: User,
              label:"Profile",
              command: ()=>{
                this.handleModalToggle(true)
              }
            },
          ]
        }
      ],
      isModalOpen:false
    };
  },
  methods:{
    redirectToMobile(){
      this.$router.push('/')
    },
    handleModalToggle(bool){
      this.isModalOpen = bool
    }
  }
};
</script>
