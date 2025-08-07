import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux"
import { loginUserThunk } from "../../store/user/user.thunk";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // const validateForm = () => {
  //   const newError = {};

  //   const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  //   // if (!isLogin && !formData.fullName.trim()) {
  //   //   newError.name = "name is required"
  //   // }

  //   // if (!isLogin && !String(formData.fullName || "").trim()) {
  //   //   newError.name = "Name is required";
  //   // }


  //   if (!isLogin && !String(formData.fullName || "").trim()) {
  //     newError.fullName = "Name is required";
  //   }
  //   if (!formData.email) {
  //     newError.email = "Email is required";
  //   } else if (!EMAIL_REGEX.test(formData.email)) {
  //     newError.email = "Email is not valid";
  //   } else if (!/[A-Z]/.test(formData.email)) {
  //     newError.email = "Email must contain at least one uppercase letter";
  //   } else if (!/\d/.test(formData.email)) {
  //     newError.email = "Email must contain at least one number";
  //   } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.email)) {
  //     newError.email = "Email must contain at least one special character";
  //   }


  //   if (!formData.password) {
  //     newError.password = "Password is required";
  //   } else if (formData.password.length < 8) {
  //     newError.password = "Password must be at least 8 characters";
  //   } else if (!/[A-Z]/.test(formData.password)) {
  //     newError.password = "Password must contain at least one uppercase letter";
  //   } else if (!/[a-z]/.test(formData.password)) {
  //     newError.password = "Password must contain at least one lowercase letter";
  //   } else if (!/\d/.test(formData.password)) {
  //     newError.password = "Password must contain at least one number";
  //   } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
  //     newError.password = "Password must contain at least one special character";
  //   }
  //   if (!isLogin) {
  //     if (!formData.confirmPassword) {
  //       newError.confirmPassword = "Confirm password is required";
  //     } else if (formData.confirmPassword !== formData.password) {
  //       newError.confirmPassword = "Password and confirm password don't match";
  //     }
  //   }

  //   if (!isLogin && formData.password !== formData.confirmPassword) {
  //     newError.confirmPassword = 'Passwords do not match';
  //   }

  //   setErrors(newError);
  //   return Object.keys(newError).length === 0;
  // };

  const handleSubmit = async () => {

    // let isValid = validateForm()
    // if (isValid) {

       await dispatch(loginUserThunk(formData))
       toast.success(isLogin ? 'Login successful!' : 'Account created successfully!');
      // Here you would normally handle the authentication
    // } else {
    //   toast.error('Please fill all the fields correctly!');
    // }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center px-4 py-0">
      <div className="w-full max-w-md">
        {/* Floating particles background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main form container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-8 py-2 shadow-2xl border border-white/20 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-white/70">
                {isLogin ? 'Sign in to your account' : 'Join us today'}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name field (signup only) */}
              <div className={`transition-all duration-300 overflow-hidden ${isLogin ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
                }`}>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                {errors.fullName && <p className="text-red-300 text-sm mt-2 ml-1">{errors.fullName}</p>}
              </div>

              {/* Email field */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                {errors.email && <p className="text-red-300 text-sm mt-2 ml-1">{errors.email}</p>}
              </div>

              {/* Password field */}
              <div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-300 text-sm mt-2 ml-1">{errors.password}</p>}
              </div>

              {/* Confirm Password field (signup only) */}
              <div className={`transition-all duration-300 overflow-hidden ${isLogin ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
                }`}>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-300 text-sm mt-2 ml-1">{errors.confirmPassword}</p>}
              </div>

              {/* Forgot Password (login only) */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-white text-purple-600 py-4 rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Toggle between login/signup */}
            <div className="mt-8 text-center">
              <p className="text-white/70">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-white font-semibold hover:underline ml-2 transition-all"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

            {/* Social login divider */}
            <div className="mt-2 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-white/60 text-sm">or continue with</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* Social login buttons */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login