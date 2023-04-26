const express = require("express");
const router = express.Router();
const Contact = require("../models/contact-DB");
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/services", (req, res) => {
  res.render("services");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contactMe", (req, res) => {
  const userName = req.body.name , userEmail = req.body.email;
  Contact.findOne({ name: userName, email: userEmail }).then(contactDoc =>{
     if(contactDoc != null) {return res.redirect("/thanksForContact")};
     Contact.create({ name: userName, email: userEmail });
     res.redirect("/thanksForContact");
  }); 
});
router.get('/thanksForContact' , (req, res)=>[
     res.render("thanksForContact")
])
module.exports = router;
