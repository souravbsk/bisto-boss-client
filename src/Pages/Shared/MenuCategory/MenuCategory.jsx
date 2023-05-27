import React from "react";
import MenuItem from "../ManuItem/MenuItem";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 text-black border-black border-b-2">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
