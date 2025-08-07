// import { IoIosSend } from "react-icons/io";

// const SendMessage = () => {



//   return (
//     <div className="w-full p-3 flex gap-2">
//       <input
//         type="text"
//         placeholder="Type here..."
//         className="input input-bordered input-primary w-full"
//         // value={"message"}
//         // onChange={(e) => setMessage(e.target.value)}
//       />
//       <button
//         // onClick={handleSendMessage}
//         className="btn btn-square btn-outline btn-primary"
//       >
//         {/* <IoIosSend /> */}
//       </button>
//     </div>
//   );
// };

// export default SendMessage;

import { IoIosSend } from "react-icons/io";

const SendMessage = () => {
  return (
    <div className="w-full p-3 bg-base-200 border-t border-white/10">
      <div className="flex items-center gap-2">
        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered input-primary w-full rounded-full"
          // value={"message"}
          // onChange={(e) => setMessage(e.target.value)}
        />

        {/* Send Button */}
        <button 
        // onClick={handleSendMessage}
          className="btn btn-circle btn-primary">
          <IoIosSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
