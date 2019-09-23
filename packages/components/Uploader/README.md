### ali-oss 图片上传组件 基于 vue

实际效果

![image](https://github.com/z253573760/cc-tools/blob/master/src/assets/load/gifhome_480x490_25s.gif?raw=true)

```
<template>
  <div class="warpper">
    <Uploader
      size="size"
      :before-upload="beforeUpload"
      :ossOpts="ossOpts"
      :before-remove="onRemove"
      :on-preview="onRemove"
      :list="list"
    />
  </div>
</template>
<script>
import { Uploader } from "@zhoucanyu/cc-tools";
const ossOpts = {
  app_id: "xxxxx",
  bucket: "xxxxx",
  dir: "xxx/xxx/xxx/",
  expire: 1569207251,
  policy: "xxxxxxxxxxxx",
  region: "oss-cn-xxxx",
  showurl: "xxxxxx",
  signature: "xxxxx"
};
export default {
  components: { Uploader },
  data() {
    return {
			size:5,
      ossOpts,
      list: [
       'http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/7c86154c-3e3c-4c09-aee5-af49770bfec7
      ]
    };
  },
  methods: {
    onPreview(url, index) {
      console.log("外部组件调用 on-preview", url, index);
    },
    onRemove(url, index) {
      console.log("外部组件调用 before-remove", url, index);
      return true;
    },
    beforeUpload(url) {
      console.log("外部组件调用 before-uploader", url);
      return file;
    }
  }
};
</script>
```

```
size Number 默认6
上传图片的个数 超过限制会自动隐藏 上传组件

ossOpts
阿里OSS上传的参数 具体移步阿里oss文档

before-upload	function(url)
上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。

before-remove   function(url, index)
删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。

on-preview      function(url)
预览图片的钩子
```
