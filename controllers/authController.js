const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      staus: "Success",
      data: {
        User: newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      staus: "Failed",
      error,
    });
  }
};
