// import { useSelector } from "react-redux";

// const Message = ({ messages, selectedUser }) => {

//   // const { user } = useSelector((state) => state.userReducer); // ✅ current logged in user
//   const { userProfile } = useSelector((state) => state.userReducer);
//   // console.log(userProfile?.responseData.profile?._id)
//   // console.log(userProfile?._id)

//   // wait until userProfile is loaded
//   if (!userProfile?.responseData?.profile?._id) {
//     return <p className="text-center text-gray-400">Loading messages...</p>;
//   }
//   console.log("msg.senderId 👉", messages?.senderId);
//   console.log("userProfile._id 👉", userProfile?._id);
//   console.log("Equal? 👉", messages?.senderId === userProfile?.responseData.profile?._id);
//   // console.log(userProfile)
//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-4">
//       {messages && messages?.length > 0 ? (
//         messages?.map((msg, index) => {
//           console.log(msg?.senderId === userProfile?.responseData.profile?._id)

//           return (
//             <div
//               key={msg._id || index}
//               className={`chat ${ msg?.senderId?.toString() === userProfile?.responseData?.profile?._id?.toString() ? "chat-end" : "chat-start"
//                 }`}>
//               <div className="chat-header">
//                 {msg.senderId === userProfile?._id ? "You" : selectedUser?.fullName}
//                 <time className="text-xs opacity-50 ml-2">
//                   {new Date(msg?.createdAt).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </time>
//               </div>
//               <div
//                 className={`chat-bubble ${msg?.senderId?.toString() === userProfile?.responseData?.profile?._id?.toString()
//                   ? "chat-bubble-primary"
//                   : "chat-bubble-secondary"
//                   }`}
//               >
//                 {msg?.message}
//               </div>
//             </div>
//           )
//         })
//       ) : (
//         <p className="text-center text-gray-400">No messages yet</p>
//       )}
//     </div>
//   );
// };

// // export default Message;
// import { useSelector } from "react-redux";

// const Message = ({ messageDetails, selectedUser }) => {
//   const { userProfile } = useSelector((state) => state.userReducer);
//   console.log(userProfile?.responseData?.profile?._id)
//   console.log(messageDetails?.senderId)


//   // console.log(messageDetails)
//   // retrun false

//   // wait until userProfile AND messages are loaded
//   if (!userProfile?.responseData?.profile?._id || !messageDetails) {

//     return <p className="text-center text-gray-400">Loading messages...</p>;

//   }

//   const isSender = messageDetails?.senderId?.toString() === userProfile?.responseData?.profile?._id?.toString();
//   // console?.log(isSender)
//   return (
//     <div className="flex-1  p-4 space-y-4">
//       {/* {messages.length > 0 ? ( */}
//       {/* messages.map((msg, index) => { */}
//       {/* // console */}

//       {/* // return ( */}
//       <div
//         // key={msg._id || index}
//         className={`chat ${isSender ? "chat-end" : "chat-start"}`}
//       >
//         <div className="chat-header">
//           {messageDetails ? "You" : selectedUser?.fullName}
//           <time className="text-xs opacity-50 ml-2">
//             {new Date(messageDetails?.createdAt).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             })}
//           </time>
//         </div>
//         <div
//           className={`chat-bubble ${isSender ? "chat-bubble-primary" : "chat-bubble-secondary"
//             }`}
//         >
//           {messageDetails?.message}
//         </div>
//       </div>
//       {/* // ); */}
//       {/* // }) */}
//       {/* // ) : ( */}
//       {/* // <p className="text-center text-gray-400">No messages yet</p> */}
//       {/* // )} */}
//     </div>
//   );
// };

// export default Message;


import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const { userProfile, selectedUser } = useSelector((state) => state.userReducer);


  // wait until userProfile AND messageDetails are loaded
  if (!userProfile?._id || !messageDetails) {
    return <p className="text-center text-gray-400">Loading messages...</p>;
  }
  const isSender = messageDetails?.senderId?.toString() === userProfile?._id?.toString();

  // console.log(messageDetails?.senderId === userProfile?.responseData?.profile?._id)

  return (
    <div className="flex-1 p-4 space-y-4">
      <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
        <div className="chat-header">
          {isSender ? "You" : selectedUser?.fullName}
          <time className="text-xs opacity-50 ml-2">
            {new Date(messageDetails?.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
        <div
          className={`chat-bubble ${isSender ? "chat-bubble-primary" : "chat-bubble-secondary"
            }`}
        >
          {messageDetails?.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
