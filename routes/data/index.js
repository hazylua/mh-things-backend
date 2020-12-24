const express = require("express");

const router = express.Router(),
  controller = require("./controller");

router.get("/:id", controller.find);

module.exports = router;
