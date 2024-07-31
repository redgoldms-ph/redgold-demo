<template>
  <div class="flex items-center gap-4 mb-7">
    <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" optionValue="value" aria-labelledby="custom">
      <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
      </template>
    </SelectButton>
    <span class="text-2xl bold">{{ $t("Live") }}</span>
  </div>
  <div class="games-container">
    <GameCard :is-landscape="value"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      options: [
        { icon: 'pi pi-th-large', value: 0 },
        { icon: 'pi pi-table', value: 1 },
      ]
    }
  }
}
</script>