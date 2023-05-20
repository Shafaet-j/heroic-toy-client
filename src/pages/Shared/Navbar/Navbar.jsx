import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
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
    <section className="sticky top-0 bg-base-100 z-10">
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
              <h1 className="text-xl lg:text-3xl font-bold text-[#ff5733]">
                Turbo Toy
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user && (
              <div className=" flex justify-center gap-4">
                <li>
                  <NavLink to="/my-toys">My Toys</NavLink>
                </li>
                <li>
                  <NavLink to="/addToys">Add Toys</NavLink>
                </li>
              </div>
            )}
            <li>
              <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <div className=" flex items-center flex-row-reverse gap-4">
              <div onClick={handleLogOut}>
                {user && <NavLink>logOut</NavLink>}
              </div>
              <div>
                {user ? (
                  <>
                    <img
                      id="app-title"
                      className=" rounded-full w-12 h-12 border-2 p-1"
                      src={user.photoURL}
                      alt=""
                    />
                    <ReactTooltip
                      anchorId="app-title"
                      place="bottom"
                      content={user?.displayName}
                    />
                  </>
                ) : (
                  <li>
                    <NavLink to="/login">LogIn</NavLink>
                  </li>
                )}
              </div>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#FF5733] border-0">Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
