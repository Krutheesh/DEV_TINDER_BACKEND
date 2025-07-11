const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
module.exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !emailId || !password) {
      throw new Error("Please fill all the fields", 400);
    }
    const existingUser = await User.findOne({ emailId });

    if (existingUser) {
      throw new Error("User already exists", 400);
    }
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash);

    //   Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    if (!user) throw new Error("User not created");
    const savedUser = await user.save();
    if (!savedUser) throw new Error("User not saved");
    const token = await savedUser.getJWT();
    if (!token) throw new Error("token not generated");
    user.password = undefined;
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });

    res.status(200).json({
      suceess: true,
      message: "User Added successfully!",
      data: savedUser,
    });
  } catch (err) {
    console.log(err.message);
    res
      .status(err.code || 500)
      .json({ sucess: false, error: "ERROR : " + err.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();
      user.password = undefined;
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
        sameSite: "None",
        secure: true,
      });

      res.status(200).json({
        success: true,
        token,
        user,
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res
      .status(err.code || 500)
      .json({ sucess: false, error: "ERROR : " + err.message });
  }
};

module.exports.logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    sameSite: "None",
    secure: true,
  });
  res.send("Logout Successful!!");
};
