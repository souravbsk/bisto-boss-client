import React, { useContext } from "react";
// import brandLogo  from "../assets/"
import {
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaHamburger,
  FaHome,
  FaListUl,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../providers/AuthProviders";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;

  const [isAdmin, isAdminLoading] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content   flex-col px-3 md:px-24 ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu bg-[#D1A054]  p-4 w-80 max-w-80  text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FaUtensils></FaUtensils> ADD ITEMS
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaListUl></FaListUl> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebook">
                  <FaBook></FaBook>MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt> RESERVATION
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> MY CART{" "}
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
                      {cart?.length}
                    </span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">
                  <FaStar></FaStar>ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybooking">
                  <FaCalendarCheck></FaCalendarCheck> MY BOOKING
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <GiHamburgerMenu></GiHamburgerMenu> MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingBag></FaShoppingBag> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <GrMail></GrMail> CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
