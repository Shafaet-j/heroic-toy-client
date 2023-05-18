import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="">LogOut</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div>
              <img src="" alt="" />
              <h1 className=" text-3xl font-bold text-[#ff5733]">
                Heroic Toy Hub
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            { user && <div className=" flex justify-center gap-4">
              <li>
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                <Link to="/addToys">Add Toys</Link>
              </li>
            </div>}
            <li>
              <Link to="/all-toys">All Toys</Link>
            </li>
            <div className=" flex items-center flex-row-reverse gap-4">
              <div onClick={handleLogOut}>{user && <Link>logOut</Link>}</div>
              <div>
                {user ? (
                  <>
                    <img
                      id="app-title"
                      className=" rounded-full w-12 h-12 border-2 p-1"
                      src={user.photoURL}
                      alt=""
                    />
                    {/* <ReactTooltip
                  anchorId="app-title"
                  place="bottom"
                  content={user?.displayName}
                /> */}
                  </>
                ) : (
                  <Link to="/login">
                    <button className="px-6 py-2 hover:bg-[#FF5733] border border-[#FF5733] hover:text-white duration-300 rounded font-semibold">
                      LogIn
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
