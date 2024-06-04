import axios from "axios";
import { message } from "antd";
import { setWithExpiry } from "../../helpers/localStorage";

const URL_API = import.meta.env.VITE_APP_API_URL;

export const login = async (input) => {
  try {
    const res = await axios.post(URL_API + "/login", input);
    if (res.data.success) {
      message.success(`${res.data.message}`);
      setWithExpiry("access_token", res.data.access_token, 7);
    } else {
      message.error(`${res.data.message}`);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (input) => {
  try {
    const res = await axios.post(URL_API + "/register", input);
    if (res.data.success) {
      message.success(`${res.data.message}`);
    } else {
      message.error(`${res.data.message}`);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const auth = () => {};
