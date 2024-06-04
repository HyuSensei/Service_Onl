export const validateUid = (data) => {
  const isNumber = /^\d+$/.test(data);
  const isHttpsUrl = /^https:\/\//.test(value);
  if (isNumber || isHttpsUrl) {
    return true;
  }
  return false;
};

export const validateServer = (data) => {
  if (!data) {
    return false;
  }
  return false;
};

export const validateQuantity = ({ data, quantity }) => {
  if (data < quantity) {
    return false;
  }
  return true;
};
