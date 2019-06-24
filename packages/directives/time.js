let timer = null;

export default {
  bind(el, { value }) {
    const result = timestampFormat(value);
    const isInterval =
      result === "刚刚" ||
      result.indexOf("小时前") !== -1 ||
      result.indexOf("分钟前") !== -1;
    el.innerText = result;
    if (isInterval) {
      //判断是否使用定时器进行更新
      timer = setInterval(() => {
        const result = timestampFormat(value);
        el.innerText = result;
      }, 1000 * 60 * 5);
    }
  },
  unbind() {
    clearInterval(timer);
  }
};
function zeroize(num) {
  return (String(num).length == 1 ? "0" : "") + num;
}

function timestampFormat(timestamp) {
  let curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
  let timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

  let curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
  let tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

  let Y = tmDate.getFullYear(),
    m = tmDate.getMonth() + 1,
    d = tmDate.getDate();
  let H = tmDate.getHours(),
    i = tmDate.getMinutes(),
    s = tmDate.getSeconds();

  if (timestampDiff < 60) {
    return "刚刚";
  } else if (timestampDiff < 3600) {
    // 一小时前之内
    return Math.floor(timestampDiff / 60) + "分钟前";
  } else if (
    // curDate.getFullYear() == Y &&
    // curDate.getMonth() + 1 == m &&
    // curDate.getDate() == d
    timestampDiff <
    60 * 60 * 24
  ) {
    return Math.floor(timestampDiff / (60 * 60)) + "小时前";
    // return '今天' + zeroize(H) + ':' + zeroize(i)
  } else {
    let newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
    if (
      newDate.getFullYear() == Y &&
      newDate.getMonth() + 1 == m &&
      newDate.getDate() == d
    ) {
      //return '昨天' + zeroize(H) + ':' + zeroize(i)
      console.log(timestampDiff, 60 * 60 * 24);
      return "一天前";
    } else if (curDate.getFullYear() == Y) {
      return (
        zeroize(m) + "-" + zeroize(d) + " " + zeroize(H) + ":" + zeroize(i)
      );
    } else {
      return (
        Y + "-" + zeroize(m) + "-" + zeroize(d)
        // + "- "
        // zeroize(H) +
        // ":" +
        // zeroize(i)
      );
    }
  }
}
