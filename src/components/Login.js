import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    // validate the form data
    // I need a reference to the input box and this reference is created by raect using useRef hook
    // email.current is refering to the input box and email.current.value is giving the value of that input box
    // console.log(email);
    // console.log(password);
    // console.log(email.current);
    // console.log(password.current);
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // If email and password are valid, the message is null
    // If there is some message , that is if there is some error, then simply return donot go ahead
    if (message) return;
    //sign in/sign up
    if (!isSignInForm) {
      //Sign up logic
      // once you called thi api, it will create a user on firebase and gives you response. If response is success, it will give a user object and it will sign in the user automatically. And if there is an erro in the API, it will go into the catch block. Whenever a yuser sign sup, firebase creates an access token and gives it to us. This is the accessToken it will use to authenticate the user. It will also gives a userId (uid)
      // Once the user sign in or sign up, I will add that user to the redux store and will navigate the user to my browse page
      // as soon as the user signs in or signs up, i want to update the userSlice with the user Info
      // instaed of dispatching actions here an there, we will use a utility given to us by firebase known as onAuthStateChanged. This API is called whenever the user signs in / signs up / signs out,,, whenever some authentication happens,,, whenever there is an authentication state change,,, suppose if you create a user or signs in a user,,, If you want to do something on the auth change then use this API. This is kind of a event listener. If the user signs in / signs up/ signs out, this will be called automatically. I will add this in the app and I will do state changes within it.

      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // signed up
          const user = userCredential.user;
          // as soon as a new user is successfully registered, update the profile with the name and photo URL
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              // user is created with email and password, once it is successful we will update profile with displayName and photoURL. After that, we will update the store once again
              // the user here is not updated yet so, we will fetch the user from the updated value from the auth
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
          console.log(user);
          // If the user signs out, then navigate him to the main page
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover  brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/PK-en-20240909-TRIFECTA-perspective_4565b049-1863-4944-9509-e4ec4415ba9e_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 top-1/4 left-1/3 max-w-sm mx-8 p-6 bg-black bg-opacity-65 text-white rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* If isSignInForm is false, then only show this input box */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          />
        )}
        {/* This email is a reference to the input box. It gives you reference to that inout box as a object*/}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />
        <p className="text-[#E50914] ">{errorMessage}</p>
        <button
          className="p-2 my-4 w-full bg-[#E50914] text-white font-semibold rounded hover:bg-[#f6121d] transition duration-300"
          onClick={handleButtonClick}
        >
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

// in this project
// app => app level
// body => root level
