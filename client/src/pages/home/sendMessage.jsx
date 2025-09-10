

import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sandMessageThunk } from "../../store/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { buttonLoading } = useSelector((state) => state.messageReducer);
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handleSendMessage =  () => {
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }

     dispatch(
      sandMessageThunk(
        {
          receiverId: selectedUser?._id,
           message
        }
      )
    );

    setMessage("");
  }
  return (
    <div className="w-full p-3 bg-base-200 border-t border-white/10">
      <div className="flex items-center gap-2">
        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered input-primary w-full rounded-full"
          value={message} // ✅
          onChange={(e) => setMessage(e.target.value)} // ✅
        />

        {/* Send Button */}
        <button
          className="btn btn-circle btn-primary"
          onClick={handleSendMessage}
          disabled={buttonLoading}
        >
          {buttonLoading ? "Sending..." : <IoIosSend className="text-xl" />}
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
