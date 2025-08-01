import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    sanderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reciverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default mongoose.model("Message", messageSchema)
