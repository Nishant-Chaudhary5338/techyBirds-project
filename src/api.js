/** @format */
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=9");
    const user = response.data.results;
    cacheData(user, "user");
    return user;
  } catch {}
};

const cacheData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};
