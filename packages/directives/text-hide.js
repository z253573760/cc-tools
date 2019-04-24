// 处理传入的指令的修饰符
function handlerModifiers(modifiers) {
  const keys = Object.keys(modifiers);
  const number = keys.find(_ => !isNaN(Number(_)));
  const color = keys.find(_ => isNaN(Number(_)));
  return {
    num: number ? Number(number) : 120,
    color: color || "red"
  };
}
export default {
  inserted(el, { value, modifiers }) {
    const { num, color } = handlerModifiers(modifiers);
    const span = `
    ...<span id=key  style="color:${color};cursor:pointer">全文</span>  
    `;
    const content = el.innerHTML.substring(0, num) + span;
    el.innerHTML = content;
    const $span = document.getElementById("key");
    $span.onclick = value;
  }
};
