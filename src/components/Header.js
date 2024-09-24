import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full z-20 px-8 py-2 flex justify-between items-center">
      {/* Netflix Logo */}
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />

      {/* Profile and Sign Out */}
      {user && (
        <div className="flex items-center space-x-4">
          <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />
          <button
            className="p-2 bg-[#E50914] text-white font-semibold rounded hover:bg-[#f6121d] transition duration-300"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
