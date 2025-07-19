const { validateEditProfileData } = require("../utils/validation");
const User = require("../models/user");
module.exports.viewProfile = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    console.log(err.status);
    res.status(401).send("ERROR : " + err.message);
  }
}

module.exports.editProfile = async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      message: `${updatedUser.firstName}, your profile updated successfully`,
      data: updatedUser,
    });
  } catch (err) {
    console.log("hello error");
    console.log(err.message);
    res.status(400).json("ERROR : " + err.message);
  }
}