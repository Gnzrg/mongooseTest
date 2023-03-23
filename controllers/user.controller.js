const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.getAll = async (req, res) => {
  try {
    const result = await User.find({});
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await User.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const result = await User.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.updateUser = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await User.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
exports.deleteUser = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await User.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
