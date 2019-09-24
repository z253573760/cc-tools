import $axios from "axios";
import { generateUUID } from "./tools";
const axios = $axios.create();
export async function ossUpload(file, ossOpts, cb = () => {}) {
  const request = new FormData();
  const uuid = generateUUID();
  const src = `${ossOpts.dir}${uuid}`;
  request.append("OSSAccessKeyId", ossOpts.app_id); // Bucket 拥有者的Access Key Id。
  request.append("name", uuid);
  request.append("policy", ossOpts.policy); // policy规定了请求的表单域的合法性
  request.append("Signature", ossOpts.signature); // 根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
  request.append("key", src); // 文件名字，可设置路径
  request.append("region", ossOpts.region);
  request.append("dir", ossOpts.dir);
  request.append("success_action_status", "200"); // 让服务端返回200,不然，默认会返回204
  request.append("file", file, uuid);
  const result = `${ossOpts.showurl}/${src}`;
  try {
    await axios.post(ossOpts.showurl, request, {
      onUploadProgress: cb
    });
    return {
      uuid,
      url: result,
      err: null
    };
  } catch (err) {
    console.log("上传OSS失败", err);
    return {
      err
    };
  }
}
