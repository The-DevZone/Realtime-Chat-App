

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const messageRef = useRef(null);
  const { userProfile, selectedUser } = useSelector(
    (state) => state.userReducer
  );

  const isSender =
    userProfile?.profile?._id?.toString() ===
    messageDetails?.senderId?.toString();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={messageRef} className="mb-2">
      <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
        {/* Header (Name + Time) */}
        <div className="chat-header text-xs opacity-70 mb-1">
          {isSender ? "You" : selectedUser?.fullName}
          <time className="ml-2">
            {new Date(messageDetails?.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>

        {/* Chat Bubble */}
        <div
          className={`chat-bubble text-sm px-3 py-2 max-w-xs break-words ${isSender ? "chat-bubble-primary" : "chat-bubble-secondary"
            }`}
        >
          {messageDetails?.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
