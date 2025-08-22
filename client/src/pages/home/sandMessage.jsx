

import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sandMessageThunk } from "../../store/message/message.thunk";

const SendMessage = ({ receiverId }) => {
  console.log(receiverId)
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { messages, buttonLoading } = useSelector((state) => state.messageReducer);
  console.log(messages);

  const handleSendMessage = async () => {
    // alert("")
    if (!text.trim()) {
      alert("Please enter a message");
      return;
    }
    await dispatch(sandMessageThunk({ message: text, receiverId }));
    setText("");
  }
  return (
    <div className="w-full p-3 bg-base-200 border-t border-white/10">
      <div className="flex items-center gap-2">
        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered input-primary w-full rounded-full"
          value={text} // ✅
          onChange={(e) => setText(e.target.value)} // ✅
        />

        {/* Send Button */}
        <button
          // onClick={handleSendMessage}
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
