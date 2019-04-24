<template>
  <div class="debounce-warpper">
    <h1>debounce - 函数防抖指令</h1>
    <h3>点击事件</h3>
    <div class="btn-warpper">
      <Button v-debounce.click="() => defautlOfClick(300)">
        默认300ms的延迟
      </Button>
      <Button v-debounce.click="() => defautlOfClick(1000)">
        默认1000ms的延迟
      </Button>
      <Button v-debounce.click.event="eventOfClick">获取Event对象</Button>
    </div>
    <h3>输入框事件</h3>
    <div class="input-warpper">
      <p>
        input获取event :
        <input
          type="text"
          :value="text"
          v-debounce.input.event="eventOfInput"
        />
      </p>
      <p>
        keydown获取event :
        <input
          type="text"
          :value="text"
          v-debounce.keydown.event="eventOfInput"
        />
      </p>
    </div>
  </div>
</template>
<script>
import { curry, throttle, flatten, debounce } from "../../packages";
export default {
  created() {
    console.log({ curry, throttle, flatten, debounce });
  },
  data() {
    return {
      text: "我是bar"
    };
  },
  methods: {
    //点击事件传参
    defautlOfClick(time) {
      const str = `默认${time}ms的延迟`;
      alert(str);
    },
    eventOfClick(event) {
      console.log(event);
      alert(event);
    },
    eventOfInput(event) {
      console.log(event);
      // alert(event);
    }
  }
};
</script>
<style lang="scss" scoped>
.debounce-warpper {
  .btn-warpper {
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    button {
      background: rgb(4, 211, 255);
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      &:active {
        background: rgb(4, 211, 240);
      }
    }
  }
  .input-warpper {
    width: 500px;
    margin: 0 auto;
    text-align: left;
  }
}
</style>