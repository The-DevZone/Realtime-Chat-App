
// import User from "../models/user.model.js"; // if needed
import Message from "../models/message.model.js"; // if needed
import Conversation from "../models/participants.model.js"
import { errorHendler } from "../utilities/errorHendler.utility.js";
import { asyncHandler } from "../utilities/asyncHendler.utility.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
  console.log("sendMessage chal rahahu ")
  // console.log(req)
  const senderId = req.user?._id
  // const receiverId = req.paramId?._id
  const receiverId = req.params.receiverId; // ✅ Correct
  const message = req.body.message
  console.log("senderId" + senderId)
  console.log("receiverId" + receiverId)
  console.log("message" + message)


  if (!senderId || !receiverId || !message) {
    return next(new errorHendler("All fields are required", 400))
  }

  let conversation = await Conversation.findOne({
    participant: [senderId, receiverId]
  })

  
  
  if (!conversation) {
    console.log("ma enter hua hu conversation ma")
    conversation = await Conversation.create({
      participant: [senderId, receiverId]
    })
  }
  console.log(conversation)

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message
  })

  if (newMessage) {
    conversation.message.push(newMessage._id)
    await conversation.save()
  }

  console.log("message" + newMessage)

  res
    .status(200).json({
      success: true,
      message: "Message sent successfully",
      responseData: newMessage
    });
});
