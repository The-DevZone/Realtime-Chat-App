import "../../App.css";
import { setSelectedUser } from "../../store/user/user.slice";
import HighlightedText from "./featchers/HighlightedText ";
import { useDispatch, useSelector } from 'react-redux';


const User = ({ userDetails, searchTerm }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);

  const handleUserClick = () => {
    dispatch(setSelectedUser(userDetails));
  };

  return (
    <div
      onClick={handleUserClick}
      className={`flex gap-5 items-center hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer ${userDetails?._id === selectedUser?._id && "bg-gray-700"
        }`}
    >
      {/* 🔹 Avatar */}
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img
            src={userDetails?.avatar_img || "https://randomuser.me/api/portraits/men/45.jpg"}
            alt={userDetails?.fullName}
          />
        </div>
      </div>

      {/* 🔹 User Info */}
      <div>
        <h2 className="line-clamp-1">
          <HighlightedText text={userDetails?.fullName || "Unknown"} highlight={searchTerm} />
        </h2>
        
      </div>
    </div>
  );
};

export default User;



