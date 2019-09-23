<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="item in routes" :key="item.path" :to="item.path">
        {{ item.name }}
      </router-link>

      <!-- <router-link to="/">主页</router-link> |
      <router-link to="/debounce">函数防抖</router-link> -->
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import routes from "@/router/routes";
export default {
  data() {
    return { routes };
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1600px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: normal;
}
</style>
