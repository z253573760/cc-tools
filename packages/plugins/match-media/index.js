import Template from "./template";
export default Vue => {
  const Tpl = Vue.extend(Template);
  const $vm = new Tpl({
    el: document.createElement("div")
  });
  document.body.appendChild($vm.$el);
};
