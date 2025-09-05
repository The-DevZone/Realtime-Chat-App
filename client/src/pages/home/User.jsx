

import "../../App.css";
import { setSelectedUser } from "../../store/user/user.slice";
import HighlightedText from "./featchers/HighlightedText ";
import { useDispatch, useSelector } from 'react-redux';

/**
 * User component that displays a scrollable list of users
 * @param {Object} props - Component props
 * @param {Array} props.users - Array of user objects to display
 */

// const User = ({ users, searchTerm = "" }) => {
const User = ({ userDetails }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  
  const handleUserClick = () => {
    dispatch(setSelectedUser(userDetails));
  }

  return (
    <div
      onClick={handleUserClick}
      className={`flex gap-5 items-center hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer ${userDetails?._id === selectedUser?._id && "bg-gray-700"}`}
    >
      <div className={`avatar`}>
        <div className="w-12 rounded-full">
          <img src={userDetails?.avatar_img} />
        </div>
      </div>
      <div>
        <h2 className="line-clamp-1">{userDetails?.fullName}</h2>
        <p className="text-xs">{userDetails?.username}</p>
      </div>
    </div>
  );
};

export default User;


