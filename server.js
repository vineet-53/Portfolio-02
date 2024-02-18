const express = require("express");
const app = express();
const db = require('./configs/db')
const PORT  =process.env.PORT || 8000;
const router = require("./router/root");
const expressEjsLayouts = require("express-ejs-layouts");
db.connect()
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
app.listen(PORT , ( err) => { 
  console.log("Server started at port", PORT)

});
