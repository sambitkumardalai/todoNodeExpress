const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(201).json({
    staus: "Success",
    token,
    data: {
      User: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) check if email or password not given
  if (!email || !password)
    return next(new appError("Please provide email or password", 400));
  //  2) check if user exist and password is correct
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new appError("Incorrect email or password", 401));

  // 3) if everything ok then send token to client
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(200).json({
    status: "success",
    token,
  });
});
