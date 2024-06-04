import axios from "axios";

const URL_API = import.meta.env.VITE_APP_API_URL;

export const getDataServer = async (path) => {
  try {
    const res = await axios.get(URL_API + `${path}`);
    if (res.data.success) {
      return res.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};