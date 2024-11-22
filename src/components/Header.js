import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/redux/slices/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };

  // i want to setup this only once thats why i have written this inside useEffect hook

  useEffect(() => {
    // if the user sign in/ signs out/ signs up , in all the cases this will be called. All the updates in the store can be done form one place. Otherwise we have to write all this logic at random places. I want to all this from one place
    // we are checking the auth everytime the page loads. We are doing this to check the authentication and setting up the store. If the user is logged in, then we will update the store. If the user is not logged in, then we will remove the user from the store
    // whenever the headers loads, this listener will be there and it will check for the auth everytime. Whenever the useEffect will be called, whenevr the auth status change, it will automatically redirect accordingly.
    //whenever you login, sign up / sign out, everytime onAuthStateChanged will be called, I will do the routing(navigating) only from here
    //onAuthStateChange logic is called whenever the header component is loaded

    // It will return a unsubscribe function. If I call this function , it will remove the onAuthStateChanged from our browser
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // if the user is signed in / signs up then i will get the user over here
      if (user) {
        // User is signed in / the user signs up
        const { uid, email, displayName, photoURL } = user;
        // now update the user, put all this to the store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // If the user is logged in , and the user tries to go to the log in page, then always redirect him to the browse page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // If the user is not logged in, navigate him to the login page
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  // if the component unmounts , I want to unsubscribe to onAuthStateChanged also. Otherwise it will keep on adding the onAuthStateChange ( a kind of event listener) everytime the component mounts. So better to write clean up logic in useEffect hook. We will unsubscribe when the header component unmounts.

  return (
    <div className="absolute w-full z-20 px-8 py-2 flex justify-between items-center">
      {/* Netflix Logo */}
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />

      {/* Profile and Sign Out */}
      {user && (
        <div className="flex items-center space-x-4">
          <img className="w-12 h-12 rounded " alt="userIcon" src={user?.photoURL} />
          <button
            className="p-2 bg-[#E50914] text-white font-semibold rounded hover:bg-[#f6121d] transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
