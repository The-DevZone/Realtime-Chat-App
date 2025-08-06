// import { IoSearch } from "react-icons/io5";
// import User from "./User";

// const UserSidebar = () => {


//     return (
//         <div class="max-w-[20em] w-full h-screen flex flex-col border-r border-r-white/10">

//             <h1 class="bg-black mx-3 rounded-lg mt-3 px-2 py-1 text-[#7480FF] text-xl font-semibold">
//                 GUP SHUP
//             </h1>

//             {/* <!-- Search Input --> */}
//             <div class="p-3">
//                 <label class="input input-bordered flex items-center gap-2">
//                     <input type="text" class="grow" placeholder="Search" />
//                     🔍
//                 </label>
//             </div>

//             {/* <!-- User List --> */}
//             <div class="h-full overflow-y-auto px-3 flex flex-col gap-2">
//                 {/* <!-- Example user --> */}
//                 <div class="flex items-center gap-3 p-2 border rounded-lg bg-gray-900 text-white">
//                     <div class="avatar">
//                         <div class="w-10 rounded-full">
//                             <img src="https://via.placeholder.com/40" alt="User Avatar" />
//                         </div>
//                     </div>
//                     <div>
//                         <h2 class="font-medium">john_doe</h2>
//                         <p class="text-sm text-gray-400">John Doe</p>
//                     </div>
//                 </div>
//                 {/* <!-- Repeat above block for more users --> */}
//             </div>

//             {/* <!-- Logged In User Info and Logout --> */}
//             <div class="flex items-center justify-between p-3 border-t border-t-white/10">
//                 <div class="flex items-center gap-3">
//                     <div class="avatar">
//                         <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
//                             <img src="https://via.placeholder.com/40" alt="Logged in user" />
//                         </div>
//                     </div>
//                     <h2>logged_user</h2>
//                 </div>

//                 <button class="btn btn-primary btn-sm px-4">
//                     Logout
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default UserSidebar;



import { IoSearch } from "react-icons/io5";
import User from "./User";

const UserSidebar = () => {
    return (
        <div className="max-w-[20em] w-full h-screen flex flex-col border-r border-r-white/10 bg-base-100">

            {/* 🔷 App Title */}
            <h1 className="bg-black mx-3 rounded-lg mt-3 px-3 py-2 text-[#7480FF] text-xl font-bold">
                GUP SHUP
            </h1>

            {/* 🔍 Search Bar */}
            <div className="p-3">
                <label className="input input-bordered flex items-center gap-2 rounded-full">
                    <input type="text" className="grow" placeholder="Search..." />
                    <IoSearch />
                </label>
            </div>

            {/* 👥 User List */}
            <div className="flex-1 overflow-y-auto px-3 flex flex-col gap-2">
                {/* Example User */}
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 cursor-pointer transition">
                    <div className="avatar online">
                        <div className="w-10 rounded-full">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="User Avatar" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-white">john_doe</h2>
                        <p className="text-sm text-gray-400">John Doe</p>
                    </div>
                </div>

                {/* More users... (or <User /> components if using props) */}
            </div>

            {/* 👤 Logged-in User & Logout */}
            <div className="flex items-center justify-between p-3 border-t border-t-white/10">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Logged in user" />
                        </div>
                    </div>
                    <h2 className="text-white font-medium">rohit_dev</h2>
                </div>
                <button className="btn btn-sm btn-primary px-4">Logout</button>
            </div>
        </div>
    );
};

export default UserSidebar;
