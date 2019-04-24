<template>
  <div class="text-hide-warpper">
    <p v-text-hide.120.blue="bar">{{ text }}</p>
  </div>
</template>
<script>
import { text } from "@/assets/text.json";
export default {
  data() {
    return {
      text: text
    };
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
