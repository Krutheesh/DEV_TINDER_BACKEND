const {Chat} = require("../models/chatModel");
const User = require("../models/user");

module.exports.chat = async(req,res) => {
 try {
  const { targetUserId } = req.params;
  const userId = req.user._id;
  let chat = await Chat.findOne({
    participants: { $all: [userId, targetUserId] },
  }).populate({
    path: "messages.senderId",
    select: "firstName lastName",
  });
  if (!chat) {
    chat = new Chat({
      participants: [userId, targetUserId],
      messages: [],
    });
    await chat.save();
  }
  res.json(chat);
   } catch (err) {
     console.log(err.message);
     res
       .status(err.code || 500)
       .json({ sucess: false, error: "ERROR : " + err.message });
   }
}