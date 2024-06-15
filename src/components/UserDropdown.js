import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const navigate = useNavigate();

  let userName = null;

  const user = auth.currentUser;

  if (user !== null) {
    user.providerData.forEach((profile) => {
      userName = profile.displayName;
    });
  }

  const handleSignout = () =>
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });

  return (
    <div className="absolute right-8 top-10 md:top-14 lg:top-14 xl:top-14 shadow-xl p-6 rounded-xl bg-black text-stone-50  flex flex-col gap-5">
      <h1>Welcome, {userName}</h1>
      <ul className="flex flex-col gap-2 text-sm border-y-2 py-4 border-stone-100">
        <li className="cursor-pointer hover:underline">Account</li>
        <li className="cursor-pointer hover:underline">Help Center</li>
      </ul>
      <button
        onClick={handleSignout}
        className="text-sm self-center hover:underline  "
      >
        Signout of Netflix
      </button>
    </div>
  );
};

export default UserDropdown;
