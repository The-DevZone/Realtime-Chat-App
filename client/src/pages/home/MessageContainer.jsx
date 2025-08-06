// import User from "./User";
// // import Message from "./Message";
// // import SendMessage from "./SendMessage";

// const MessageContainer = () => {

//   return (
//     <>
       
//         <div className="w-full flex items-center justify-center flex-col gap-5">
//           <h2>Welcome to GUP SHUP</h2>
//           <p className="text-xl">Please select a person to continue your chat!!</p>
//           </div>

//         <div className="h-screen w-full flex flex-col">
//           <div className="p-3 border-b border-b-white/10">
//             {/* <User userDetails={selectedUser} /> */}
//           </div>

//           <div className="h-full overflow-y-auto p-3">
//             {/* {messages?.map((messageDetails) => {
//               return (
//                 // <Message
//                 //   key={messageDetails?._id}
//                 //   messageDetails={messageDetails}
//                 // />
//               );
//             })} */}
//           </div>

//           {/* <SendMessage /> */}

//         </div>
//       {/* )} */}
//     </>
//   );
// };

// export default MessageContainer;


const MessageContainer = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-base-100">
      
      {/* 🟢 Top Header: User Info */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Asha</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
        <div className="text-gray-400 text-xl cursor-pointer">⋮</div>
      </div>

      {/* 💬 Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Received message */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Receiver"
              />
            </div>
          </div>
          <div className="chat-header">
            Asha
            <time className="text-xs opacity-50 ml-2">12:45 PM</time>
          </div>
          <div className="chat-bubble">Hey Rohit! How are you?</div>
        </div>

        {/* Sent message */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="You"
              />
            </div>
          </div>
          <div className="chat-header">
            You
            <time className="text-xs opacity-50 ml-2">12:46 PM</time>
          </div>
          <div className="chat-bubble chat-bubble-primary">
            I'm good! What about you?
          </div>
        </div>
      </div>

      {/* 📝 Message Input Box */}
      <div className="p-4 border-t border-white/10 bg-base-200">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
