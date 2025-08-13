
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const PrivateRoute = ({ children }) => {
//   const Navigator = useNavigate();
//   const { isAuthenticated, screenloading } = useSelector((state) => state.user);
//   console.log(isAuthenticated, screenloading)
//   useEffect(() => {
//     console.log(isAuthenticated, screenloading)
//     if (!isAuthenticated && !screenloading) {
//       Navigator("/login")
//     }
//   }, [isAuthenticated, screenloading])
//   return children
// };

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, screenloading } = useSelector((state) => state.userReducer); // ✅ Fixed state path
  console.log(isAuthenticated, screenloading)
  useEffect(() => {
    if (!isAuthenticated && !screenloading) {
      navigate("/login");
    }
  }, [isAuthenticated, screenloading]);

  return children;
};
