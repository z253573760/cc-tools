<template>
  <div class="warpper">
    <Uploader
      :before-upload="beforeUpload"
      :ossOpts="ossOpts"
      :before-remove="remove"
      :on-preview="preview"
      :list="list"
    />
  </div>
</template>
<script>
import { Uploader } from "../../packages";
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
      ossOpts,
      list: [
        {
          percentage: 100,
          uuid: 1,
          url:
            "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/7c86154c-3e3c-4c09-aee5-af49770bfec7"
        },
        {
          percentage: 100,
          uuid: 2,
          url:
            "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/92bbeded-7ec5-4f5e-9eaf-11536e21f9c7"
        },
        {
          percentage: 100,
          uuid: 3,
          url:
            "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/a1076e43-425f-4281-ab99-d2c5f7bdc730"
        },
        {
          percentage: 100,
          uuid: 4,
          url:
            "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/ce9ab3f9-0be5-4fa7-90aa-9c526084ef8e"
        },
        {
          percentage: 100,
          uuid: 5,
          url:
            "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/44d0d416-d4d0-40d7-9f19-51a4617e8d6e"
        }
      ]
    };
  },
  methods: {
    preview(file, index) {
      console.log("外部组件调用 on-preview", file, index);
    },
    remove(file, index) {
      console.log("外部组件调用 before-remove", file, index);
      return true;
    },
    async beforeUpload(file) {
      console.log("外部组件调用 before-uploader", file);
      return file;
    }
  }
};
</script>