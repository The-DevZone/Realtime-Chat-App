import { useState } from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
import { Menu } from "lucide-react"; // icon for toggle

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-30 inset-y-0 left-0 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out 
        w-64 bg-base-100 border-r border-r-white/10`}
      >
        <UserSidebar onUserSelect={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay (only on mobile when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col z-10">
        {/* Mobile Toggle Button */}
        <div className="md:hidden p-2 border-b border-white/10 bg-base-200 flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-sm btn-ghost"
          >
            <Menu size={22} />
          </button>
          <h2 className="ml-3 text-lg font-semibold">Chats</h2>
        </div>

        {/* Message Container */}
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
