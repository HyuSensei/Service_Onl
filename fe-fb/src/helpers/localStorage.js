export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (!data) {
    return null;
  }
  return data;
};

export const removeData = (key) => {
  localStorage.removeItem(key);
};

export const setWithExpiry = (key, value, time) => {
  const now = new Date();
  const data = {
    value: value,
    expiry: now.getTime() + time * 1000,
  };
  localStorage.setItem(key, JSON.stringify(data));
};

export const getWithExpiry = (key) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  const item = JSON.parse(data);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
  }
};
