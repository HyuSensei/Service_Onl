const { Telegraf } = require("telegraf");
require("dotenv").config();
class MyBot {
  constructor(token) {
    this.bot = new Telegraf(token);
    this.setup();
  }

  setup() {
    this.bot.launch();
    process.once("SIGINT", () => this.bot.stop("SIGINT"));
    process.once("SIGTERM", () => this.bot.stop("SIGTERM"));
  }

  getBot() {
    return this.bot;
  }
}

const botInstance = new MyBot(process.env.TOKEN);
module.exports = botInstance;
