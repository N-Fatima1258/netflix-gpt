import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover bg-opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/PK-en-20240909-TRIFECTA-perspective_4565b049-1863-4944-9509-e4ec4415ba9e_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute z-10 top-1/4 left-1/3 max-w-sm mx-8 p-6 bg-black bg-opacity-80 text-white rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* If isSignInForm is false, then only show this input box */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button className="p-2 my-4 w-full bg-[#E50914] text-white font-semibold rounded hover:bg-[#f6121d] transition duration-300">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember me</span>
          </div>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
        <div className="mt-6 text-gray-400 text-sm">
          <span>
            {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          </span>
          <a
            href="#"
            className="text-white hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in."}
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
