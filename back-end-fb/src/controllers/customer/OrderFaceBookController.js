require("dotenv").config();
import {
  eyeFacebookRepo,
  likeFacebookRepo,
  shareFacebookRepo,
  subFacebookRepo,
  viewFacebookRepo,
} from "../../repositories/orderRepository";
import botInstance from "../../bot";

const chatId = process.env.CHAT_ID;
const bot = botInstance.getBot();

export const orderLike = async (req, res) => {
  try {
    let { link_id, server, quantity, _id, username, note, feel, total_price } =
      req.body;
    if (!link_id || !server || !quantity) {
      return res.status(400).json({
        detail: "Vui lòng điền đầy đủ thông tin",
      });
    }
    if (!note) {
      note = `KHÔNG CÓ`;
    }
    if (!feel) {
      feel = "LIKE";
    }
    if (!total_price) {
      total_price = 0;
    }
    const order = await likeFacebookRepo({
      total_price,
      link_id,
      server,
      quantity,
      note,
      _id,
      username,
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
              <b>Cảm xúc: ${feel}</b>
              <b>Tổng tiền:</b> <code style="color: blue;">${formattedPrice}</code>
              <b>Ngày đặt:</b> ${createdAtOrder}
              `;
      await bot.telegram.sendMessage(chatId, messageChat, {
        parse_mode: "HTML",
      });
      return res.status(200).json({
        success: true,
        message: "Đặt hàng đơn dịch vụ buff like facebook thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderEye = async (req, res) => {
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
    const order = await eyeFacebookRepo({
      total_price,
      link_id,
      server,
      quantity,
      time,
      note,
      _id,
      username,
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
        message: "Đặt hàng đơn dịch vụ buff mắt facebook thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderView = async (req, res) => {
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
    const order = await viewFacebookRepo({
      total_price,
      link_id,
      server,
      quantity,
      note,
      _id,
      username,
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
        message: "Đặt hàng đơn dịch vụ buff view facebook thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderSub = async (req, res) => {
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
    const order = await subFacebookRepo({
      total_price,
      link_id,
      server,
      quantity,
      note,
      _id,
      username,
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
        message: "Đặt hàng đơn dịch vụ buff sub facebook thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderShare = async (req, res) => {
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
    const order = await shareFacebookRepo({
      total_price,
      link_id,
      server,
      quantity,
      note,
      _id,
      username,
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
        message: "Đặt hàng đơn dịch vụ buff share facebook thành công",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
