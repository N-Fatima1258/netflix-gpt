import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/slices/userSlice";


const Body = () => {
  // i want to setup this only once thats why i have written this inside useEffect hook
  useEffect(() => {
    // if the user sign in/ signs out/ signs up , in all the cases this will be called. All the updates in the store can be done form one place. Otherwise we have to write all this logic at random places. I want to all this from one place
    onAuthStateChanged(auth, (user) => {
      // if the user is signed in / signs up then i will get the user over here
      if (user) {
        // User is signed in / the user signs up
        const { uid, email, displayName, photoURL } = user;
        // now update the user, put all this to the store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  const dispatch = useDispatch();
 
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
