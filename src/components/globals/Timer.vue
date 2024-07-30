<!-- src/components/CircularTimer.vue -->
<template>
  <div :class="{ 'circular-timer': true, 'orange': timeLeft <= (totalTime / 2), 'red': timeLeft <= 5 }">
    <svg width="50" height="50" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" class="background" />
      <circle cx="50" cy="50" r="45" class="progress" :style="circleStyle" />
    </svg>
    <div class="time">{{ formattedTime }}</div>
  </div>
</template>

<script>
export default {
  props:['time'],
  data() {
    return {
      totalTime: this.time, // Total time in seconds
      timeLeft: this.time, // Time left in seconds
      timer: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
    circleStyle() {
      const progress = (this.timeLeft / this.totalTime) * 283; // 283 is the circumference of the circle
      return {
        strokeDasharray: '283',
        strokeDashoffset: 283 - progress,
      };
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft -= 1;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
