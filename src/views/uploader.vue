<template>
  <div class="warpper">
    <cc-uploader
      text="上传图片"
      :limit="limit"
      :before-upload="beforeUpload"
      :ossOpts="ossOpts"
      :before-remove="remove"
      :on-preview="preview"
      :on-error="onError"
      :on-success="onSuccess"
      :list="list"
      width="100"
    />
  </div>
</template>
<script>
import { CcUploader } from "../../packages";
const ossOpts = {};
export default {
  components: { CcUploader },
  data() {
    return {
      limit: 6,
      ossOpts,
      list: [
        "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/92bbeded-7ec5-4f5e-9eaf-11536e21f9c7"
      ]
    };
  },
  mounted() {
    this.list = [
      "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/7c86154c-3e3c-4c09-aee5-af49770bfec7",
      "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/7c86154c-3e3c-4c09-aee5-af49770bfec7",
      "http://jiangniu-dev.oss-cn-shenzhen.aliyuncs.com/uploads/business_plan/20190923/92bbeded-7ec5-4f5e-9eaf-11536e21f9c7"
    ];
  },
  methods: {
    preview(url, index) {
      console.log("外部组件调用 on-preview", url, index);
    },
    remove(url, index) {
      console.log("外部组件调用 before-remove", url, index);
      return true;
    },
    beforeUpload(file) {
      console.log("外部组件调用 before-uploader", file);
      return file;
    },
    onError(err, file) {
      if (err) {
        console.log("外部组件调用 onError", err, file);
      }
    },
    onSuccess(url, file) {
      console.log("外部组件调用 onSuccess", url, file);
    }
  }
};
</script>