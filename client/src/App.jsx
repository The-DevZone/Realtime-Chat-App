import { LogIn } from 'lucide-react';
import React from 'react'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
// import { getProfileThunk } from './store/user/user.thunk';
import { Outlet } from 'react-router';
import './App.css'
import { getProfileThunk, otherUserProfileThunk, searchUserThunk } from './store/user/user.thunk';
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProfileThunk())
  // }, [])

  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getProfileThunk());
  //   })();
  // }, []);

  useEffect(() => {

    console.log("🔥 Dispatching getProfileThunk...");
    dispatch(getProfileThunk());
    dispatch(otherUserProfileThunk())
    dispatch(searchUserThunk())
  }, [dispatch]);


  // const {otherUser} = useSelector((state) => state.userReducer)
    // console.log(otherUser)

    // useEffect(() => {
    // },[])
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Outlet />
    </>
  )
}

export default App