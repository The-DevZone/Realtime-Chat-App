// import { useEffect } from "react";
import { useSelector } from "react-redux";

// const Message = ({ messages }) => {
//   console.log(messages)
//   // const { messages } = useSelector((state) => state.messageReducer)
//   // console.log(messages)

//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-4">
//       {/* Received message */}
//       <div className="chat chat-start">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             {/* <img
//               src="https://randomuser.me/api/portraits/women/45.jpg"
//               alt="Receiver"
//             /> */}
//           </div>
//         </div>
//         <div className="chat-header">
//           Asha
//           <time className="text-xs opacity-50 ml-2">12:45 PM</time>
//         </div>
//         <div className="chat-bubble">Hey Rohit! How are you?</div>
//       </div>

//       {/* Sent message */}
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             {/* <img
//               src="https://randomuser.me/api/portraits/men/32.jpg"
//               alt="You"
//             /> */}
//           </div>
//         </div>
//         <div className="chat-header">
//           You
//           <time className="text-xs opacity-50 ml-2">12:46 PM</time>
//         </div>
//         <div className="chat-bubble chat-bubble-primary">
//           I'm good! What about you?
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;


const Message = ({ messages, selectedUser }) => {

  console.log(messages , selectedUser)
  // const { user } = useSelector((state) => state.userReducer); // ✅ current logged in user
  const { userProfile } = useSelector((state) => state.userReducer);
  console.log(userProfile)
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages && messages?.length > 0 ? (
        messages?.map((msg) => (
          <div
            key={msg._id}
            className={`chat ${msg?.senderId === userProfile?._id ? "chat-end" : "chat-start"
              }`}
          >
            <div className="chat-header">
              {msg.senderId === userProfile?._id ? "You" : selectedUser?.fullName}
              <time className="text-xs opacity-50 ml-2">
                {new Date(msg?.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </div>
            <div
              className={`chat-bubble ${msg?.senderId === userProfile?._id
                  ? "chat-bubble-primary"
                  : "chat-bubble-secondary"
                }`}
            >
              {msg?.message}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No messages yet</p>
      )}
    </div>
  );
};

export default Message;
