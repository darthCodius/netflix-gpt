import { useState } from "react";
import UserDropdown from "./UserDropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useSelector((store) => store.user);

  const handleToggle = () => {
    setToggleMenu((curr) => !curr);
  };

  return (
    <>
      <div className="w-screen flex justify-between items-center">
        <div>
          <img
            className="w-40 "
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
          />
        </div>
        {user && (
          <div className="flex mr-5 gap-3">
            <img
              className="rounded-md cursor-pointer"
              src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
