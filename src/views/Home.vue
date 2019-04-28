<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    {{ boolean }}
  </div>
</template>

<script>
import { getIp } from "@/api/common";
import Common from "@/api/common";

export default {
  data() {
    return {
      boolean: 1
    };
  }
  // async created() {
  //   console.log("orientate", orientate());
  // }
};
</script>
