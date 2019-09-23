import { generateUUID } from "./tools";

export function fileToBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise(resolve => {
    reader.onloadend = function() {
      // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
      resolve(reader.result);
    };
  });
}

export async function compressedImg(file) {
  const dataBase64Url = await fileToBase64(file);
  const result = await dealImage(dataBase64Url, {}, file.type);
  return dataURLtoFile(result, generateUUID());
}

export function dataURLtoFile(dataurl, filename) {
  // 将base64转换为文件
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

/**
 * 图片压缩，默认同比例压缩
 * @param {Object} path
 *   pc端传入的路径可以为相对路径，但是在移动端上必须传入的路径是照相图片储存的绝对路径
 * @param {Object} obj
 *   obj 对象 有 width， height， quality(0-1)
 * @param {Object} callback
 *   回调函数有一个参数，base64的字符串数据
 */
export function dealImage(path, obj = {}, formatType = "image/jpeg") {
  const img = new Image();
  img.src = path;
  return new Promise(resolve => {
    img.onload = function $_() {
      const that = this;
      // 默认按比例压缩
      let w = that.width;
      let h = that.height;
      const scale = w / h;
      w = obj.width || w;
      h = obj.height || w / scale;
      let quality = 0.7; // 默认图片质量为0.7
      // 生成canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      // 创建属性节点
      const anw = document.createAttribute("width");
      anw.nodeValue = w;
      const anh = document.createAttribute("height");
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);
      ctx.drawImage(that, 0, 0, w, h);
      // 图像质量
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }
      // quality值越小，所绘制出的图像越模糊
      const base64 = canvas.toDataURL(formatType, quality);
      // 回调函数返回base64的值
      resolve(base64);
    };
  });
}
// 图片预加载
export function preLoadImg(src, cb) {
  const Img = new Image();
  Img.onload = cb;
  Img.src = src;
}
