### ali-oss 图片上传组件 基于 vue

实际效果

![image](https://github.com/z253573760/cc-tools/blob/master/src/assets/load/gifhome_480x490_25s.gif?raw=true)

#### 参数说明

| 属性          | 说明                                                                                                    | 类型                 | 默认值 |
| ------------- | ------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| text          | 文本提示                                                                                                | String               |        |
| width         | 宽高                                                                                                    | Number,String        | 100    |
| limit         | 最大允许上传个数                                                                                        | Number               | 6      |
| ossOpts       | 阿里 OSS 上传的参数 具体移步阿里 oss 文档                                                               | Object               | 必填   |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。           | function(file)       |        |
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(url, index) |        |
| on-preview    | 预览图片的钩子                                                                                          | function(url)        |        |
| on-error      | 文件上传失败时的钩子                                                                                    | function(err,file)   |        |
| on-success    | 文件上传成功时的钩子                                                                                    | function(url,file)   |        |

#### 全局注册

```
方式一：

import { CcUploader } from "@zhoucanyu/cc-tools";
Vue.use( CcUploader )

```

```
方式二：

import { CcUploader } from "@zhoucanyu/cc-tools";
Vue.component("cc-uploader", CcUploader )

```

#### 组件内使用

```
<template>
  <div class="warpper">
    <Uploader
       width="120"
      :ossOpts="ossOpts"
      :limit="limit"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :on-preview="onPreview"
      :on-error="onError"
      :on-success="onSuccess"
      :list="list"
    />
  </div>
</template>
<script>
import { CcUploader } from "@zhoucanyu/cc-tools";
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
      limit:5,
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
    beforeRemove(url, index) {
      console.log("外部组件调用 before-remove", url, index);
      return true;
    },
    beforeUpload(url) {
      console.log("外部组件调用 before-uploader", url);
      return file;
    },
    onError(err,file){
      console.log("外部组件调用 on-error", err, file);
    },
    onSuccess(url,file){
      console.log("外部组件调用 on-success", url, file);
    }
  }
};
</script>
```
