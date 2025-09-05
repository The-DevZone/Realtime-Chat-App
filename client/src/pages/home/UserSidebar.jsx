
import { IoSearch } from "react-icons/io5";
import User from "./User";
// import { LogOut } from "lucide-react";
import { logOutUserThunk, otherUserProfileThunk, searchUserThunk } from "../../store/user/user.thunk";
// import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
// import { getMessageTh/ unk } from "../../store/message/message.thunk";

const UserSidebar = () => {
    const dispatch = useDispatch()
    const { searchUser, userProfile } = useSelector((state) => state.userReducer)
    const { otherUser } = useSelector((state) => state.userReducer);
    // const { messages } = useSelector((state) => state.messageReducer);

    // console.log(messages)

    // const [filter, setFilter] = useState("")
    // const debouncedSearch = useMemo(
    //     () =>
    //         debounce((value) => {
    //             dispatch(searchUserThunk(value));
    //         }, 300), // 500ms delay
    //     [dispatch]
    // );
    // const handleSearchChange = (e) => {
    //     const value = e?.target?.value
    //     setFilter(value)

    //     debouncedSearch(value)
    // }

    const handleLogout = () => {
        dispatch(logOutUserThunk())
    }

    // useEffect(() => {
    // (async () => {
    //   await dispatch(otherUserProfileThunk());
    // })();
    //   }, []);

    return (
        <div className="max-w-[20em]  w-full h-screen flex flex-col border-r border-r-white/10 bg-base-100" >

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
                        name="fullName"
                        // value={filter}
                        // onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <IoSearch />
                </label>
            </div>

            {/* <User users={Array.isArray(searchUser) ? searchUser : []} searchTerm={filter} /> */}
            {otherUser?.map(userDetails => {
                return (
                    <User key={userDetails._id} userDetails={userDetails} />
                )
            })
            }

            {/* 👤 Logged-in User & Logout */}
            <div className="flex items-center justify-between p-3 border-t border-t-white/10">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                            <img src={userProfile?.responseData?.profile?.avatar_img || "https://randomuser.me/api/portraits/men/45.jpg"}
                                alt="Logged in user" />
                        </div>
                    </div>
                    <h2 className="text-white font-medium">{userProfile?.profile?.fullName}</h2>
                </div>
                <button
                    className="btn btn-sm btn-primary px-4"
                    onClick={handleLogout}
                >Logout</button>
            </div>
        </div>
    );
};

export default UserSidebar;
