const path = require("path"),
  assets = require("./assets");

const find = async (req, res) => {
  const id = req.params.id;
  try {
    if (assets[`${id}`]) return res.status(200).send(assets[`${id}`]);
    else {
      const keys = [];
      for (key in assets) {
        keys.push(key);
      }
      return res.status(500).send(keys);
    }
  } catch (err) {
    return res.status(500).send("Failed.");
  }
};

module.exports = {
  find,
};
