<template>
  <header :class="{ 'active': hasScrolled }">
    <div class="my-container">
      <img src="@/assets/img/logos/red-gold.png" />
      <div class="right">
        <LoginBtn v-if="hasScrolled"/>
        <LangMenu/>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      hasScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const specificScrollY = 200; 
      this.hasScrolled = scrollPosition >= specificScrollY;
    }
  }
}
</script>
