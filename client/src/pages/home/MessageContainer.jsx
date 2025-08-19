import { useSelector } from "react-redux";
import User from "./User";
import { FaWhatsapp } from "react-icons/fa6";

// import User from "./User"
const MessageContainer = () => {

  const { selectedUser } = useSelector((state) => state.userReducer);
  console.log(selectedUser)

  return (
     selectedUser ? (
      <div className="flex flex-col h-screen w-full bg-base-100">

        {/* 🟢 Top Header: User Info */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-base-200">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src={selectedUser?.avatar_img}
                  alt="User Avatar"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{selectedUser?.fullName}</h2>
              <p className="text-xs text-gray-400">{selectedUser?.fullName}</p>
            </div>
          </div>
          {/* <User users={selectedUser} /> */}
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
    ) : (
      <div className="min-h-screen w-full bg-gray-800 text-white font-sans flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* WhatsApp Logo */}
      <div className="mb-8">
        <div className="w-24 h-24  flex items-center justify-center mb-6">
          {/* WhatsApp Icon SVG */}
          {/* <svg 
            className="w-14 h-14 text-gray-400" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg> */}
          <FaWhatsapp  className="w-44 h-44 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-2xl font-light text-white mb-4">
          WhatsApp for Windows
        </h1>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-2">
          Send and receive messages without keeping your phone online.
        </p>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
      </div>

      {/* Loading Animation */}
      <div className="absolute bottom-24 flex space-x-1">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-200"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-400"></div>
      </div>

      {/* Bottom Section - End-to-end encrypted */}
      <div className="absolute bottom-8 flex items-center text-gray-400 text-xs">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path 
            fillRule="evenodd" 
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
            clipRule="evenodd"
          />
        </svg>
        <span>End-to-end encrypted</span>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
    )

    
   
  );
};

// export default Message
export default MessageContainer