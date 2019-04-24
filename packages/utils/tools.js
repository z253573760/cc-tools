//函数防抖
export function debounce(func, delay = 300, I = null) {
  return () => {
    clearTimeout(I);
    I = setTimeout((...args) => func(...args), delay);
  };
}
