import { http } from "../utils/http";

// 获取Sts上传权限
export const aliStsToken = (data: object) => {
  return http.request("post", "ipark/sys/upload/sts/ua", { data });
};
