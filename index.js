require("dotenv").config();

const express = require("express"),
  routes = require("./routes"),
  port = process.env.PORT,
  server = express();

server.use("/data", routes.data);
server.listen(port, () => console.log(`Listening on port ${port}.`));
