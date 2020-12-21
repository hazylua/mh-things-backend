var express = require("express");
var router = express.Router();
var AuthenticationController = require("../controllers/AuthenticationController");

var AuthenticationControllerPolicy = require("../policies/AutheticationControllerPolicy");

router.get("/", (req, res, next) => {
  res.send("register is working properly");
});

router.post(
  "/",
  AuthenticationControllerPolicy.register,
  AuthenticationController.register
);

module.exports = router;
