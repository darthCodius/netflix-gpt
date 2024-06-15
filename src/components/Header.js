import { useEffect, useRef, useState } from "react";
import UserDropdown from "./UserDropdown";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL, USER_ICON } from "../utils/constants";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useSelector((store) => store.user);

  const dropdownRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign In
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
        // ...
      } else {
        //Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const handleToggle = () => {
    setToggleMenu((curr) => !curr);
  };

  return (
    <>
      <div className="flex w-screen justify-between items-center absolute z-50 bg-gradient-to-b from-black">
        <div>
          <img
            className="w-24 md:w-36 lg:w-40 xl:w-40 ml-10"
            src={LOGO_URL}
            alt="netflix-logo"
          />
        </div>
        {user && (
          <div id="dropdown" ref={dropdownRef} className="mr-10">
            <img
              className="rounded-md cursor-pointer"
              src={USER_ICON}
              alt="user-icon"
              onClick={handleToggle}
            />
            {toggleMenu && <UserDropdown />}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
