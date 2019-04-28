<template>
  <div class="mask" v-if="!isMobile || show" @touchmove.prevent="() => {}">
    <div class="title">{{ txt }}</div>
  </div>
</template>
<script>
import {
  orientate,
  isMobile,
  isMatches,
  getScrollTop
} from "../../utils/tools.js";
export default {
  data() {
    return {
      show: false,
      scrollTop: 0
    };
  },
  methods: {
    handlerHorizontalScreen() {
      this.scrollTop = getScrollTop();
      window.scrollTo(0, 0);
      // console.log(this.txt);
      this.show = true;
    },
    handlerVerticalScreen() {
      this.show = false;
      window.scrollTo(0, this.scrollTop);
    }
  },
  created() {
    orientate(this.handlerVerticalScreen, this.handlerHorizontalScreen);
    !this.isMobile && (document.body.parentNode.style.overflowY = "hidden");
  },
  computed: {
    isMatches,
    isMobile,
    txt() {
      if (!this.isMobile) {
        return "请在移动端打开页面";
      }
      if (!this.isMatches) {
        return "请竖屏显示";
      }
      return "请竖屏显示";
    }
  }
};
</script>
<style  scoped>
.mask {
  background: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  position: absolute;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* transition: all 0.3s linear; */
}
.mask .title {
  font-size: 22px;
}
</style>