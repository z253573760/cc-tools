<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import { getIp } from "@/api/common";
import Common from "@/api/common";
export default {
  async created() {
    //
    const [data, err] = await getIp();
    if (err) {
      console.log("err", err);
      // do somethings...
      return;
    }
    console.log(data);
  }
};
</script>
