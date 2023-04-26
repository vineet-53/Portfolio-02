if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  console.log("development mode");
}
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const url = process.env.DB_URL;
const db = mongoose.connection;
const router = require("./router/root");
const expressLayouts = require("express-ejs-layouts");
const expressEjsLayouts = require("express-ejs-layouts");
// database
mongoose.connect(url);
db.on("error", () => console.log("error connecting to database"));
db.once("open", () => console.log("Database connected Successfully"));
// static
app.use("/", express.static("public"));

// express ejs layouts
app.use(expressEjsLayouts);
app.set("layout", "layouts/layout");
// ejs setup
app.set("view engine", "ejs");
app.set("/views", __dirname + "/views");

// router setup
app.use("/", router);

//=======================================
app.listen(process.env.PORT || 8000);
