import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMessageThunk } from "../../store/message/message.thunk";
import Message from "./Message";
import SendMessage from "./sendMessage";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
    }
  }, [selectedUser]);


  return (
    !selectedUser ? (
      <div className="min-h-screen w-full bg-gray-800 text-white font-sans flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <h1 className="text-2xl font-light text-white mb-4">
          Select a chat to start messaging
        </h1>
      </div>
    ) : (
      <div className="flex flex-col h-screen w-full bg-base-100">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-base-200">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={selectedUser?.avatar_img} alt="User Avatar" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{selectedUser?.fullName}</h2>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {
            messages?.map((messageDetails, index) => {
              return (
                <Message key={messageDetails?._id || index} messageDetails={messageDetails} />
              )
            })
          }
        </div>

        {/* Message Input */}
        <SendMessage />
      </div>
    )

  );
};

export default MessageContainer;
