import axios from "axios"
import { apiPath } from "./path"

export const getHistory = async (limit) => {
  const res = await axios.get("https://q0uaty8gwa.execute-api.ap-northeast-1.amazonaws.com/dev/translate", { params: { limit: limit } })
  return res.data
}