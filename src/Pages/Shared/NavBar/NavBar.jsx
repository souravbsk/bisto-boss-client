import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [cart,isLoading] = useCart();
  // if(!isLoading){
  //   return <p>Loadgin</p>
  // }
 
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        // console.log(err.message);
      });
  };

  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <div className="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {cart?.length || 0}
            </span>
        </div>
        </Link>
      </li>
      <li>
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar py-8 bg-[#15151580] fixed top-0 left-0 right-0 z-10 mx-auto text-white px-14">
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
              className="menu items-center menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
