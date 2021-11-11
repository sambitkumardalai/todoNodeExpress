const User = require("../models/userModel");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllUser = catchAsync(async (rqe, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    numberOfUser: users.length,
    data: {
      users,
    },
  });
});
