<template lang="">
  <div class="section-title-wrapper"
    v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }">
    <h1>{{$t(title)}}</h1>
    <span>{{$t(subTitle)}}</span>
  </div>
</template>
<script>
export default {
  props:['title','subTitle']
}
</script>