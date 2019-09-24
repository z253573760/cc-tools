import CcUploader from "./src/uploader";

/* istanbul ignore next */
CcUploader.install = function(Vue) {
  Vue.component(CcUploader.name, CcUploader);
};

export default CcUploader;
