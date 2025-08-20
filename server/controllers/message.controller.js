
// import User from "../models/user.model.js"; // if needed
import Message from "../models/message.model.js"; // if needed
import Conversation from "../models/participants.model.js"
import ErrorHandler from "../utilities/errorHandler.utilities.js";
import { asyncHandler } from "../utilities/asyncHendler.utility.js";

// This function sends a message from a user to another user
export const sendMessage = asyncHandler(async (req, res, next) => {
  const senderId = req.user?._id
  const receiverId = req.params.receiverId;
  const message = req.body.message

  // Check if all fields are filled
  if ( !message) {
    return next(new ErrorHandler("All fields are required", 400))
  }

  let conversation = await Conversation.findOne({
    participant: [senderId, receiverId]
  })



  if (!conversation) { //  Check if a conversation exists, if not create one
    conversation = await Conversation.create({
      participant: [senderId, receiverId]
    })
  }

  const newMessage = await Message.create({ //  Create a new message
    senderId,
    receiverId,
    message
  })

  if (newMessage) {    //  If the message was created successfully, add it to the conversation
    conversation.message.push(newMessage._id)
    await conversation.save()
  }

  res.status(200).json({ //  Return a success response
    success: true,
    message: "Message sent successfully",
    responseData: newMessage
  });
});


export const getMessages = asyncHandler(async (req, res, next) => { //  This function gets all the messages between two users
  //  ya dono id wahi ha senderId or receiverId bss ma sirf iska name change kr raha hu ss
  const myId = req.user?._id
  const otherParticipant = req.params.otherParticipant;

  const conversation = await Conversation.findOne({ //  Find the conversation between the two users
    participant: { $all: [myId, otherParticipant] },
  }).populate("message")

  if (!conversation) { //  If the conversation doesn't exist, return an error
    return next(new ErrorHandler("Conversation not found", 404))
  }

  res.status(200).json({ //  If the conversation exists, return the conversation
    success: true,
    responseData: conversation
  })

})

