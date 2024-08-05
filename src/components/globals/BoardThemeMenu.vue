<template>
  <div>
    <Button @click="handleModalToggle(true)" icon="pi pi-cog" text rounded severity="secondary"
      class="text-white lang-btn" aria-label="Filter" />
  </div>
  <Dialog v-model:visible="isModalOpen" modal :header="$t('Choose board theme')"
    :breakpoints="{ '2000px': '30vw', '1500px': '70vw', '800px': '90vw', '500px': '90vw' }"
    class="board-theme-modal"
    >
    <SelectButton v-model="value" @change="handleSetTheme" optionValue="value" class="board-theme-select" :options="options" optionLabel="label" dataKey="value" aria-labelledby="custom">
      <template #option="slotProps">
        <div class="flex justify-between items-center w-full">
          <span class="title">{{ $t(slotProps.option.label) }}</span>
          <i v-if="slotProps.option.value == value" class="text-green-600 fa-solid fa-circle-check"></i>
          <i v-else class="fa-regular fa-circle-check"></i>
        </div>
        <img :src="slotProps.option.img">
      </template>
    </SelectButton>
    <!-- <div class="flex items-end justify-end gap-3 px-4 mt-5">
      <Button @click="handleModalToggle(false)" label="Cancel" class="w-20" outlined/>
      <Button severity="success" @click="handleSetTheme" label="Confirm" class="w-20" />
    </div> -->
  </Dialog>
</template>
<script>
import LightBoard from "@/assets/img/elements/light-menu.png"
import DarkBoard from "@/assets/img/elements/dark-menu.png"
export default {
  data() {
    return {
      isModalOpen: false,
      value: 0,
      options: [
        { img: LightBoard, label: 'Light', value:0},
        { img: DarkBoard, label: 'Dark', value:1 },
      ]
    }
  },
  computed:{
    layoutStore(){
      return this.$layoutStore()
    }
  },
  mounted(){
    this.value = this.layoutStore.cardTheme
  },
  methods: {
    handleModalToggle(bool) {
      this.isModalOpen = bool
    },
    handleSetTheme(){
      this.layoutStore.setCardTheme(this.value)
    }
  }
}
</script>