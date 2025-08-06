
// const Message = () => {


//   return (
//     <>
//       <div >
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS chat bubble component"
//               src=""
//             />
//           </div>
//         </div>
//         <div className="chat-header">
//           <time className="text-xs opacity-50">12:45</time>
//         </div>
//         <div className="chat-bubble">{"messageDetails?.message"}</div>
//       </div>
//     </>
//   );
// };

// export default Message;

const Message = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Receiver Message (Left aligned) */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Receiver Avatar"
            />
          </div>
        </div>
        <div className="chat-header">
          Asha
          <time className="text-xs opacity-50 ml-2">12:45 PM</time>
        </div>
        <div className="chat-bubble">Hey Rohit! How are you?</div>
      </div>

      {/* Sender Message (Right aligned) */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Sender Avatar"
            />
          </div>
        </div>
        <div className="chat-header">
          You
          <time className="text-xs opacity-50 ml-2">12:46 PM</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">
          I'm good, how about you?
        </div>
      </div>
    </div>
  );
};

export default Message;
