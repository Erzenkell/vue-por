<script>
export default {
  data() {
    return {
      mousePosX: 100,
      mousePosY: 100,
      followerPosX: 0,
      followerPosY: 0,
      frame: 0,
      frameSrc: ("../assets/follower/kirb/frame-0.jpg"),
      step: 0,
      moved: true,
      mirrored: 1,
      numberOfFrames: 9,
      animSpeed: 5,
      cursorDistance: 50,
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMouseMove);
    setInterval(this.updateFollower, 10);
  },
  methods: {
    handleMouseMove(e) {
      this.mousePosX = e.clientX;
      this.mousePosY = e.clientY;
    },
    updateFollower() {
      if (Math.abs(this.mousePosX - this.followerPosX) > this.cursorDistance) {
        this.followerPosX += (this.mousePosX - this.followerPosX) / 100;
        this.mirrored = this.mousePosX - this.followerPosX > 0 ? 1 : -1;
        this.moved = true;
      }
      if (Math.abs(this.mousePosY - this.followerPosY) > this.cursorDistance) {
        this.followerPosY += (this.mousePosY - this.followerPosY) / 100;
        this.moved = true;
      }
      if (this.moved) {
        if (this.step === this.animSpeed) {
          if (this.frame < this.numberOfFrames) {
            this.frame += 1;
            this.step = 0;
            this.moved = false;
          } else {
            this.frame = 0;
            this.step = 0;
            this.moved = false;
          }
        } else {
          this.step += 1;
          this.moved = false;
        }
      }
      this.frameSrc = (`src/assets/follower/kirb/frame-${this.frame}.jpg`);
    },
  },
};
</script>

<template>
  <div class="cursor-follower" :style="{ left: `${followerPosX}px`, top: `${followerPosY}px`, backgroundImage: `url(${frameSrc})`, transform: `scaleX(${mirrored})` }" />
</template>

<style scoped>
.cursor-follower {
    position: fixed;
    display: block;
    z-index: 1000;
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none;
}
</style>