const opts = {
  true: "visible",
  false: "hidden"
};
export default {
  inserted(el, binding) {
    const { value } = binding;
    el.style.visibility = opts[value];
  },
  update(el, binding) {
    const { value } = binding;
    el.style.visibility = opts[value];
  }
};
