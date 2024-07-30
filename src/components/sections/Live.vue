<template>
  <section id="live">
    <SectionTitle :title="'Live Studio'" :sub-title="'Broadcasting Excellence in Real-Time'" />
    <Carousel :value="products" :showIndicators="false" class="live-carousel" :numVisible="3" :numScroll="1"
      :circular="true" :autoplayInterval="3000" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="rounded m-2  p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img :src="slotProps.data.img" class="w-full rounded" />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </section>
</template>
<script>
import Slide1 from "@/assets/img/live-carousel/1.jpg"
import Slide2 from "@/assets/img/live-carousel/2.jpg"
import Slide3 from "@/assets/img/live-carousel/3.jpg"
import Slide4 from "@/assets/img/live-carousel/4.jpg"
import Slide5 from "@/assets/img/live-carousel/5.jpg"
export default {
  data() {
    return {
      products: [
        {
          img: Slide1
        },
        {
          img: Slide2
        },
        {
          img: Slide3
        },
        {
          img: Slide4
        },
        {
          img: Slide5
        }
      ],
      responsiveOptions: [
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    };
  },
}
</script>