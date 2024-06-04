import {
  BUFF_EYE,
  BUFF_LIKE,
  BUFF_SHARE,
  BUFF_SUB,
  BUFF_VIEW,
  FACEBOOK,
  TIME,
  WAIT_STATUS,
} from "../const/service";
import Order from "../models/Order";

export const likeFacebookRepo = async ({
  service = BUFF_LIKE,
  type = FACEBOOK,
  total_price,
  link_id,
  server,
  quantity,
  time = TIME,
  note,
  _id,
  username,
  status = WAIT_STATUS,
}) => {
  return await Order.create({
    service,
    type,
    total_price,
    order_detail: {
      link_id,
      server,
      quantity,
      time,
      note,
    },
    user: {
      _id,
      username,
    },
    status,
  });
};

export const eyeFacebookRepo = async ({
  service = BUFF_EYE,
  type = FACEBOOK,
  total_price,
  link_id,
  server,
  quantity,
  time = TIME,
  note,
  _id,
  username,
  status = WAIT_STATUS,
}) => {
  return await Order.create({
    service,
    type,
    total_price,
    order_detail: {
      link_id,
      server,
      quantity,
      time,
      note,
    },
    user: {
      _id,
      username,
    },
    status,
  });
};

export const viewFacebookRepo = async ({
  service = BUFF_VIEW,
  type = FACEBOOK,
  total_price,
  link_id,
  server,
  quantity,
  time = TIME,
  note,
  _id,
  username,
  status = WAIT_STATUS,
}) => {
  return await Order.create({
    service,
    type,
    total_price,
    order_detail: {
      link_id,
      server,
      quantity,
      time,
      note,
    },
    user: {
      _id,
      username,
    },
    status,
  });
};

export const subFacebookRepo = async ({
  service = BUFF_SUB,
  type = FACEBOOK,
  total_price,
  link_id,
  server,
  quantity,
  time = TIME,
  note,
  _id,
  username,
  status = WAIT_STATUS,
}) => {
  return await Order.create({
    service,
    type,
    total_price,
    order_detail: {
      link_id,
      server,
      quantity,
      time,
      note,
    },
    user: {
      _id,
      username,
    },
    status,
  });
};

export const shareFacebookRepo = async ({
  service = BUFF_SHARE,
  type = FACEBOOK,
  total_price,
  link_id,
  server,
  quantity,
  time = TIME,
  note,
  _id,
  username,
  status = WAIT_STATUS,
}) => {
  return await Order.create({
    service,
    type,
    total_price,
    order_detail: {
      link_id,
      server,
      quantity,
      time,
      note,
    },
    user: {
      _id,
      username,
    },
    status,
  });
};
