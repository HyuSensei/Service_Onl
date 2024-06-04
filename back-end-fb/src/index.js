require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import configViewEngine from "./config/viewEngine";
import connection from "./config/connectDB";
import customerRoute from "./routes/customer";
import adminRoute from "./routes/admin";

const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);

app.use(express.static(__dirname + "/public"));

app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use("/api/v1/", customerRoute);
app.use("/api/v1/admin", adminRoute);

connection();

app.listen(port, () => {
  console.log(`---------Server listening on port ${port}---------`);
});
