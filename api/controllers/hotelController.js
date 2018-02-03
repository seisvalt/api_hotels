var hotel = require("../models/hotel");


exports.create = function(req, res) {
  res.json({
    response: "Create id"
  });

};

exports.findAll = function(req, res) {
  var result = hotel.readOne();
  var arrFound = result.filter(function(item) {
    return item.id == '161891';
  });

  res.json({
    response: arrFound
  });
  ;

};

exports.findOne = function(req, res) {
  res.json({
    response: "Find id"
  });

};

exports.update = function(req, res) {
  res.json({
    response: "Update id"
  });

};

exports.delete = function(req, res) {
  res.json({
    response: "Delete id"
  });

};