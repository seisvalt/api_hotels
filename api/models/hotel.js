var file = require("fs");
var conts = file.readFileSync("./api/database/data.json");
var hotels = JSON.parse(conts);


exports.readOne = function () {
  return hotels;
}