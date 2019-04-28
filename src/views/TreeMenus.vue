
<template>
  <div class="test">
    <TreeMenu :list="menu" />
  </div>
</template>

<script>
import { TreeMenu } from "../../packages";
export default {
  components: {
    TreeMenu
  },
  methods: {},
  data() {
    return {
      menu: [
        {
          title: "1级标题1",
          children: [
            { title: "2级标题1" },
            { title: "2级标题2", children: [{ title: "3级标题1" }] },
            { title: "2级标题3", children: [{ title: "3级标题2" }] }
          ]
        },
        {
          title: "1级标题2",
          children: [
            { title: "2级标题1" },
            { title: "2级标题2" },
            { title: "2级标题3", children: [{ title: "3级标题1" }] }
          ]
        }
      ]
    };
  }
};
</script>

