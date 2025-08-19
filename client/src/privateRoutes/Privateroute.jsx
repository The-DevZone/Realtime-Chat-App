
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const PrivateRoute = ({ children }) => {
//   const Navigator = useNavigate();
//   const { isAuthenticated, screenLoading } = useSelector((state) => state.user);
//   console.log(isAuthenticated, screenLoading)
//   useEffect(() => {
//     console.log(isAuthenticated, screenLoading)
//     if (!isAuthenticated && !screenLoading) {
//       Navigator("/login")
//     }
//   }, [isAuthenticated, screenLoading])
//   return children
// };

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, screenLoading } = useSelector((state) => state.userReducer); // ✅ Fixed state path
  useEffect(() => {
    if (!isAuthenticated && !screenLoading) navigate("/login");
  }, [isAuthenticated, screenLoading, navigate]);

  return children;
};
