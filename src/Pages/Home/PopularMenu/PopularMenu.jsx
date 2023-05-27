import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/ManuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menus, setMenus] = useMenu();
  const popularItem = menus.filter((item) => item.category === "popular");

  return (
    <div className="st container">
      <SectionTitle
        headingTitle="FROM OUR MENU"
        subTitle="Check it out"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {popularItem.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link>
          <button className="btn btn-outline border-0 text-black border-black border-b-2">
           View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
