import  mongoose  from "mongoose"

const participantSchema = new mongoose.Schema({

    participant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }],
    
}, { timestamps: true })

const Participants = mongoose.model("Participants", participantSchema)

export default Participants