<template>
  <section id="devices">
    <div class="my-container">
      <SectionTitle :title="'Devices'" :sub-title="'Seamlessly Compatible Across All Devices'" />
      <div class="devices-content">
        <div class="device">
          <img :src="WindowsIcon" alt=""/>
          <span>Windows</span>
        </div>
        <div class="device">
          <img :src="MacIcon" alt=""/>
          <span>Mac OS</span>
        </div>
        <div class="device">
          <img :src="IosIcon" alt=""/>
          <span>IOS</span>
        </div>
        <div class="device">
          <img :src="AndroidIcon" alt=""/>
          <span>Android</span>
        </div>
        <div class="device">
          <img :src="HtmlIcon" alt=""/>
          <span>HTML5</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import WindowsIcon from "@/assets/img/icons/windows.svg"
import MacIcon from "@/assets/img/icons/mac.svg"
import IosIcon from "@/assets/img/icons/ios.svg"
import AndroidIcon from "@/assets/img/icons/android.svg"
import HtmlIcon from "@/assets/img/icons/html5.svg"
export default {
  data(){
    return{
      WindowsIcon,
      MacIcon,
      IosIcon,
      AndroidIcon,
      HtmlIcon
    }
  }
}
</script>