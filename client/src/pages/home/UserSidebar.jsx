

import { IoSearch } from "react-icons/io5";
import User from "./User";
import {
  logOutUserThunk,
  otherUserProfileThunk,
  searchUserThunk,
} from "../../store/user/user.thunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

const UserSidebar = ({ setActiveChat }) => {
  const dispatch = useDispatch();
  const { searchUser, otherUser, userProfile } = useSelector(
    (state) => state.userReducer
  );

  const [filter, setFilter] = useState("");

  // Debounced search
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        dispatch(searchUserThunk(value));
      }, 300),
    [dispatch]
  );

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setFilter(value);
    debouncedSearch(value);
  };

  const handleLogout = () => {
    dispatch(logOutUserThunk());
  };

  useEffect(() => {
    dispatch(otherUserProfileThunk());
  }, [dispatch]);

 return (
  <div className="h-full flex flex-col">
    {/* Title + Search + Users */}
    <div className="flex-1 flex flex-col">
      {/* 🔷 App Title */}
      <h1 className="bg-black mx-3 rounded-lg mt-3 px-3 py-2 text-[#7480FF] text-xl font-bold">
        Chats
      </h1>

      {/* 🔍 Search Bar */}
      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2 rounded-full">
          <input
            type="text"
            className="grow"
            value={filter}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <IoSearch />
        </label>
      </div>

      {/* 🔹 Scrollable User List */}
      <div className="flex-1 overflow-y-auto px-2">
        {(filter.trim() ? searchUser : otherUser)?.map((userDetails) => (
          <div
            key={userDetails._id}
            onClick={() => setActiveChat(userDetails)}
          >
            <User userDetails={userDetails} searchTerm={filter} />
          </div>
        ))}
      </div>
    </div>

    {/* 👤 Logged-in User & Logout (always fixed at bottom) */}
    <div className="shrink-0 flex items-center justify-between p-3 border-t border-t-white/10 bg-base-200">
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <img
              src={
                userProfile?.profile?.avatar_img ||
                "https://randomuser.me/api/portraits/men/45.jpg"
              }
              alt="Logged in user"
            />
          </div>
        </div>
        <h2 className="text-white font-medium">
          {userProfile?.profile?.fullName}
        </h2>
      </div>
      <button className="btn btn-sm btn-primary px-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  </div>
);

};

export default UserSidebar;
