<template>
  <div class="game-card" v-for="item in 10">
    <Timer :time="32"/>
    <div class="game-card-header">
      <div class="results">
        <div class="result-percent player">50%</div>
        <div class="result player">17</div>
        <div class="result tie">5</div>
        <div class="result banker">17</div>
        <div class="result-percent banker">50%</div>
      </div>
      <div class="line-percentage">
        <div class="line player" :style="{width:'50%'}"></div>
        <div class="line banker" :style="{width:'50%'}"></div>
      </div>
    </div>
    <div class="game-card-body">
      <img src="@/assets/img/card/table-thumb.jpg" alt="">
      <div class="pop-up play">{{$t('PLAY')}}</div>
      <div class="pop-up" v-if="item == 1">{{$t('SHUFFLING')}}</div>
      <div class="game-card-details">
        <h3>Speed Baccarat A</h3>
        <div class="details">
          <span class="dealer">Maria</span>
          <span class="bet-limit">2-2K</span>
          <span class="users">
            <span class="pi pi-users"></span>
            <span>89</span>
          </span>
          <span class="users">
            <span class="pi pi-eye"></span>
            <span>200K+</span>
          </span>
        </div>
      </div>
    </div>
    <div class="game-card-footer">
      <img src="@/assets/img/card/board.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>