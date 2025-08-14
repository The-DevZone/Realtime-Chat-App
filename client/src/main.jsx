import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './pages/home/Home.jsx';
import Login from './pages/authantication/Login.jsx';
import About from './pages/about/About.jsx';
import { PrivateRoute } from './privateRoutes/Privateroute.jsx'
// import { PrivateRoute } from './privateRoutes/Privateroute.jsx'
// import { PrivateRoute } from '';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ), // private route
  },
  {
    path: "/login",
    element: <Login />, // public route
  }

]);

createRoot(document.getElementById('root')).render(
  <div className='bg-whatsapp-bg text-white h-screen overflow-hidden'>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </div>
);
