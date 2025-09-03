// import { useDispatch, useSelector } from "react-redux";
// import User from "./User";
// import { FaWhatsapp } from "react-icons/fa6";
// import { useEffect } from "react";
// import { getMessageThunk } from "../../store/message/message.thunk";
// import Message from "./Message";
// import SendMessage from "./sandMessage";

// // import User from "./User"
// const MessageContainer = () => {

//   const dispatch = useDispatch();
//   const { selectedUser, userProfile } = useSelector((state) => state.userReducer);
//   const { messages } = useSelector((state) => state.messageReducer);
//   // console.log(selectedUser?._id)
//   // console.log(userProfile)
//   // console.log(messages[0]?._id)

//   // useEffect(() => {
//   //   if (selectedUser?._id ) {
//   //     dispatch(getMessageThunk({ receiverId: selectedUser._id }));
//   //     // dispatch(getMessageThunk({ receiverId: selectedUser._id }));
//   //   }
//   // }, [selectedUser, dispatch]);
//   useEffect(() => {
//     if (selectedUser?._id && userProfile?.responseData?.profile?._id) {
//       dispatch(getMessageThunk({ receiverId: selectedUser._id }));
//     }
//   }, [selectedUser, userProfile, dispatch]);

//   return (
//     selectedUser ? (
//       <div className="flex flex-col h-screen w-full bg-base-100">

//         {/* 🟢 Top Header */}
//         <div className="flex items-center justify-between p-4 border-b border-white/10 bg-base-200">
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   src={selectedUser?.avatar_img}
//                   alt="User Avatar"
//                 />
//               </div>
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold">{selectedUser?.fullName}</h2>
//               <p className="text-xs text-gray-400">{selectedUser?.fullName}</p>
//             </div>
//           </div>
//           <div className="text-gray-400 text-xl cursor-pointer">⋮</div>
//         </div>

//         {/* 💬 Chat Messages */}
//         {/* <Message message={selectedUser} /> */}
//         <Message messages={messages} selectedUser={selectedUser} />

//         {/* 📝 Message Input Box */}
//         <SendMessage receiverId={selectedUser?._id} />
//       </div>
//     ) : (
//       <div className="min-h-screen w-full bg-gray-800 text-white font-sans flex flex-col items-center justify-center px-8 relative overflow-hidden">
//         {/* WhatsApp Logo */}
//         <div className="mb-8">
//           <div className="w-24 h-24 flex items-center justify-center mb-6">
//             <FaWhatsapp className="w-44 h-44 text-gray-400" />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="text-center max-w-md mx-auto">
//           <h1 className="text-2xl font-light text-white mb-4">
//             WhatsApp for Windows
//           </h1>
//           <p className="text-gray-300 text-sm leading-relaxed mb-2">
//             Send and receive messages without keeping your phone online.
//           </p>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
//           </p>
//         </div>

//         {/* Loading Animation */}
//         <div className="absolute bottom-24 flex space-x-1">
//           <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
//           <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-200"></div>
//           <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-400"></div>
//         </div>

//         {/* Footer */}
//         <div className="absolute bottom-8 flex items-center text-gray-400 text-xs">
//           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <span>End-to-end encrypted</span>
//         </div>
//       </div>
//     )
//   );

// };

// // export default Message
// export default MessageContainer

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMessageThunk } from "../../store/message/message.thunk";
import Message from "./Message";
import SendMessage from "./sendMessage";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);

console.log("messages in container 👉", messages);
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
              // console.log(messageDetails?._id === selectedUser?._id)
              // console.log(messageDetails?._id)
              return (
                <Message key={messageDetails?._id || index} messageDetails={messageDetails} />
              )
            })
          }
        </div>
        {/* <Message messages={messages} selectedUser={selectedUser} /> */}

        {/* Message Input */}
        <SendMessage />
      </div>
    )

  );
};

export default MessageContainer;
