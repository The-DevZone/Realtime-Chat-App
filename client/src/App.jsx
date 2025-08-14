import { LogIn } from 'lucide-react';
import React from 'react'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getProfileThunk } from './store/user/user.thunk';
import { Outlet } from 'react-router';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileThunk())
  }, [])

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