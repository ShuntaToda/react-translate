import axios from "axios"
import { apiPath } from "./path"

export const getHistory = async (limit) => {
  try {
    const res = await axios.get(apiPath, { params: { limit: limit } })
    return res.data

  } catch (e) {
    console.error(e)
  }
}
export const postHistory = async (inputText, fromLang, toLang, save = false) => {
  try {
    const params = {
      input_text: inputText,
      from_lang: fromLang,
      to_lang: toLang,
      save: save
    }
    const res = await axios.post(apiPath, {}, {
      params: params
    })
    return res.data

  } catch (error) {
    console.error(error)
  }
}