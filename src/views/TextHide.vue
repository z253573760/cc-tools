<template>
  <div class="text-hide-warpper">
    <h1>text-hide - 文本隐藏指令</h1>
    <p v-text-hide.120.blue="bar">{{ text }}</p>
  </div>
</template>
<script>
import { text } from "@/assets/text.json";
// import test from "@/study-vue/test";
export default {
  data() {
    return {
      text: "text"
    };
  },
  created() {
    test();
  },
  methods: {
    bar() {
      console.log(`cb`);
    }
  }
};
</script>
<style lang="scss" scoped>
.text-hide-warpper {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
</style>
