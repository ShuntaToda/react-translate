import axios from "axios"
import { apiPath } from "./path"

export const getHistory = async (limit) => {
  const res = await axios.get(apiPath, { params: { limit: limit } })
  return res.data
}