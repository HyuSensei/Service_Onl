const Order = require("../../models/Order");
require("dotenv").config();
import botInstance from "../../bot";

const chatId = process.env.CHAT_ID;
const bot = botInstance.getBot();

export const orderLikeTT = async (req, res) => {
  try {
    let { link_id, server, quantity, _id, username, note, total_price } =
      req.body;
    if (!link_id || !server || !quantity) {
      return res.status(400).json({
        detail: "Vui lòng điền đầy đủ thông tin",
      });
    }
    if (!note) {
      note = `KHÔNG CÓ`;
    }
    if (!total_price) {
      total_price = 0;
    }
    const SERVICE = "BUFF LIKE";
    const TIME = "KHÔNG CÓ";
    const STATUS = "ĐANG CHỜ";
    const TYPE = "TIKTOK";
    const order = await Order.create({
      service: SERVICE,
      type: TYPE,
      total_price: total_price,
      order_detail: {
        link_id: link_id,
        server: server,
        quantity: quantity,
        time: TIME,
        note: note,
      },
      user: {
        _id: _id,
        username: username,
      },
      status: STATUS,
    });
    if (order) {
      const createdAtOrder = order.createdAt.toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total_price);
      const messageChat = `
      <b>THÔNG BÁO DỊCH VỤ</b>
      <b>Dịch vụ:</b> ${SERVICE}
      <b>Loại dịch vụ:</b> ${TYPE}
      <b>Link or ID:</b> <code style="color: blue;">${link_id}</code>
      <b>Server:</b> ${server}
      <b>Số lượng:</b> ${link_id}
      <b>Tổng tiền:</b> <code style="color: blue;">${formattedPrice}</code>
      <b>Ngày đặt:</b> ${createdAtOrder}
      `;
      await bot.telegram.sendMessage(chatId, messageChat, {
        parse_mode: "HTML",
      });
      return res.status(200).json({
        success: true,
        message: "Đặt hàng đơn dịch vụ buff like tiktok thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderEyeTT = async (req, res) => {
  try {
    let { link_id, server, quantity, _id, username, time, note, total_price } =
      req.body;
    if (!link_id || !server || !quantity || !time) {
      return res.status(400).json({
        detail: "Vui lòng điền đầy đủ thông tin",
      });
    }
    if (!note) {
      note = `KHÔNG CÓ`;
    }
    if (!total_price) {
      total_price = 0;
    }
    const SERVICE = "BUFF MẮT";
    const STATUS = "ĐANG CHỜ";
    const TYPE = "TIKTOK";
    const order = await Order.create({
      service: SERVICE,
      type: TYPE,
      total_price: total_price,
      order_detail: {
        link_id: link_id,
        server: server,
        quantity: quantity,
        time: time,
        note: note,
      },
      user: {
        _id: _id,
        username: username,
      },
      status: STATUS,
    });
    if (order) {
      const createdAtOrder = order.createdAt.toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total_price);
      const messageChat = `
          <b>THÔNG BÁO DỊCH VỤ</b>
          <b>Dịch vụ:</b> ${SERVICE}
          <b>Loại dịch vụ:</b> ${TYPE}
          <b>Link or ID:</b> <code style="color: blue;">${link_id}</code>
          <b>Server:</b> ${server}
          <b>Số lượng:</b> ${link_id}
          <b>Thời gian chạy: ${time} phút</b>
          <b>Tổng tiền:</b> <code style="color: blue;">${formattedPrice}</code>
          <b>Ngày đặt:</b> ${createdAtOrder}
          `;
      await bot.telegram.sendMessage(chatId, messageChat, {
        parse_mode: "HTML",
      });
      return res.status(200).json({
        success: true,
        message: "Đặt hàng đơn dịch vụ buff mắt tiktok thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderViewTT = async (req, res) => {
  try {
    let { link_id, server, quantity, _id, username, note, total_price } =
      req.body;
    if (!link_id || !server || !quantity) {
      return res.status(400).json({
        detail: "Vui lòng điền đầy đủ thông tin",
      });
    }
    if (!note) {
      note = `KHÔNG CÓ`;
    }
    if (!total_price) {
      total_price = 0;
    }
    const SERVICE = "BUFF VIEW";
    const TIME = "KHÔNG CÓ";
    const STATUS = "ĐANG CHỜ";
    const TYPE = "TIKTOK";
    const order = await Order.create({
      service: SERVICE,
      type: TYPE,
      total_price: total_price,
      order_detail: {
        link_id: link_id,
        server: server,
        quantity: quantity,
        time: TIME,
        note: note,
      },
      user: {
        _id: _id,
        username: username,
      },
      status: STATUS,
    });
    if (order) {
      const createdAtOrder = order.createdAt.toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total_price);
      const messageChat = `
          <b>THÔNG BÁO DỊCH VỤ</b>
          <b>Dịch vụ:</b> ${SERVICE}
          <b>Loại dịch vụ:</b> ${TYPE}
          <b>Link or ID:</b> <code style="color: blue;">${link_id}</code>
          <b>Server:</b> ${server}
          <b>Số lượng:</b> ${link_id}
          <b>Tổng tiền:</b> <code style="color: blue;">${formattedPrice}</code>
          <b>Ngày đặt:</b> ${createdAtOrder}
          `;
      await bot.telegram.sendMessage(chatId, messageChat, {
        parse_mode: "HTML",
      });
      return res.status(200).json({
        success: true,
        message: "Đặt hàng đơn dịch vụ buff view tiktok thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderFollowTT = async (req, res) => {
  try {
    let { link_id, server, quantity, _id, username, note, total_price } =
      req.body;
    if (!link_id || !server || !quantity) {
      return res.status(400).json({
        detail: "Vui lòng điền đầy đủ thông tin",
      });
    }
    if (!note) {
      note = `KHÔNG CÓ`;
    }
    if (!total_price) {
      total_price = 0;
    }
    const SERVICE = "BUFF FOLLOW";
    const TIME = "KHÔNG CÓ";
    const STATUS = "ĐANG CHỜ";
    const TYPE = "TIKTOK";
    const order = await Order.create({
      service: SERVICE,
      type: TYPE,
      total_price: total_price,
      order_detail: {
        link_id: link_id,
        server: server,
        quantity: quantity,
        time: TIME,
        note: note,
      },
      user: {
        _id: _id,
        username: username,
      },
      status: STATUS,
    });
    if (order) {
      const createdAtOrder = order.createdAt.toLocaleString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total_price);
      const messageChat = `
      <b>THÔNG BÁO DỊCH VỤ</b>
      <b>Dịch vụ:</b> ${SERVICE}
      <b>Loại dịch vụ:</b> ${TYPE}
      <b>Link or ID:</b> <code style="color: blue;">${link_id}</code>
      <b>Server:</b> ${server}
      <b>Số lượng:</b> ${link_id}
      <b>Tổng tiền:</b> <code style="color: blue;">${formattedPrice}</code>
      <b>Ngày đặt:</b> ${createdAtOrder}
      `;
      await bot.telegram.sendMessage(chatId, messageChat, {
        parse_mode: "HTML",
      });
      return res.status(200).json({
        success: true,
        message: "Đặt hàng đơn dịch vụ buff follow tiktok thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
