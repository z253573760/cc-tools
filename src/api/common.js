import axios from "@/utils/request";
import { handlerPromise } from "../../packages";

export function getIp() {
  return handlerPromise(() => axios.get(`/ip`));
}
