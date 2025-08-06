// import React from "react";

// const User = () => {



//     return (
//         <div
//             className="flex gap-5 items-center hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer 
//          bg-gray-700 "

//         >
//             <div className="avatar online"> 
//                 <div className="w-12 rounded-full">
//                     {/* <img src={userDetails?.avatar} /> */}
//                 </div>
//             </div>
//             <div>
//                 <h2 className="line-clamp-1"> fullName</h2> 
//                 <p className="text-xs"> username</p>   
//             </div>
//         </div>
//     );
// };

// export default User;

const User = () => {
  return (
    <div
      className="flex gap-4 items-center p-3 rounded-lg cursor-pointer hover:bg-base-200 transition"
    >
      {/* Avatar with online status */}
      <div className="avatar online">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="User Avatar"
          />
        </div>
      </div>

      {/* Name + Username */}
      <div className="flex flex-col">
        <h2 className="font-medium text-base text-white line-clamp-1">
          Asha Singh
        </h2>
        <p className="text-sm text-gray-400">@asha_singh</p>
      </div>
    </div>
  );
};

export default User;
