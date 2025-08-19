

import "../../App.css";
import {setSelectedUser} from "../../store/user/user.slice";
import HighlightedText from "./featchers/HighlightedText ";
import { useDispatch, useSelector } from 'react-redux';

/**
 * User component that displays a scrollable list of users
 * @param {Object} props - Component props
 * @param {Array} props.users - Array of user objects to display
 */
// const User = ({ users, searchTerm }) => {

//   // if (!users) return <div>result not found</div>


//   return (
//     <div className="user-scroll flex-1 overflow-y-auto px-3 flex flex-col gap-2">
//       {users?.length > 0 ? (
//         users.map((user) => (
//           <div
//             key={user._id}
//             className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 cursor-pointer transition"
//           >
//             <div className="avatar online">
//               <div className="w-10 rounded-full">
//                 <img src={user.avatar_img} alt="User Avatar" />
//               </div>
//             </div>
//             <div>
//               {/* <h2 className="font-semibold text-white">{user.fullName}</h2> */}
//               {user.fullName ? (

//                 <HighlightedText text={user.fullName} highlight={searchTerm} />
//               ) : (
//                 <p className="text-white text-center mt-4">No users found.</p>
//               )}
//               <p className="text-sm text-gray-400">{user.fullName}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-white text-center mt-4">No users found.</p>
//       )}
//     </div>
//   );
// };

// export default User;

// const User = ({ users, searchTerm }) => {

//   const dispatch = useDispatch()

//   const { selectedUser } = useSelector((state) => state.userReducer);
//   console.log(selectedUser)


//   const handleClick = () => {
//     dispatch(setSelectedUser(users))
//   }

//   // Agar users nahi hai ya empty array hai
//   if (!users || users.length === 0) {
//     return <p className="text-white text-center mt-4">No users found.</p>;
//   }

//   // Filter karo search term ke basis pe
//   const filteredUsers = users.filter((user) =>
//     user.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Agar filter karne ke baad bhi kuch nahi mila
//   if (filteredUsers.length === 0) {
//     return <p className="text-white text-center mt-4 min-h-[535px]">No users found.</p>;
//   }

//   return (
//     <div onClick={handleClick} className="user-scroll flex-1 overflow-y-auto px-3 flex flex-col gap-2">
//       {filteredUsers.map((user) => (
//         <div
//           key={user._id} 
//           className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 cursor-pointer transition"
//         >
//           <div className="avatar online">
//             <div className="w-10 rounded-full">
//               <img src={user.avatar_img} alt="User Avatar" />
//             </div>
//           </div>
//           <div>
//             <HighlightedText text={user.fullName} highlight={searchTerm} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// import "../../App.css";
// import { setSelectedUser } from "../../store/user/user.slice";
// import HighlightedText from "./featchers/HighlightedText";
// import { useDispatch, useSelector } from "react-redux";

const User = ({ users, searchTerm = "" }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);

  console.log("Selected User:", selectedUser);

  // Agar users nahi hai ya empty array hai
  if (!users || users.length === 0) {
    return <p className="text-white text-center mt-4">No users found.</p>;
  }

  // Filter karo search term ke basis pe
  const filteredUsers = users.filter((user) =>
    user.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Agar filter karne ke baad bhi kuch nahi mila
  if (filteredUsers.length === 0) {
    return <p className="text-white text-center mt-4">No users found.</p>;
  }

  return (
    <div className="user-scroll h-full flex-1 overflow-y-auto px-3 flex flex-col gap-2">
      {filteredUsers.map((user) => (
        <div
          key={user._id}
          onClick={() => dispatch(setSelectedUser(user))}  // ✅ yaha per fix
          className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 cursor-pointer transition ${selectedUser?._id === user?._id ? "bg-base-200" : ""}` } 
        >
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={user.avatar_img} alt="User Avatar" />
            </div>
          </div>
          <div>
            <HighlightedText text={user.fullName} highlight={searchTerm} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;


