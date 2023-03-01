const path = require("path");

const filePath = "config/data.json"; // relative path to data file
const absolutePath = path.resolve(filePath);

exports.getData = (req, res) => {
  res.sendFile(absolutePath); //it accepts only absolute path
};
