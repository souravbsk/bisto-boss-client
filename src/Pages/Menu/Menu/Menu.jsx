import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import HeaderCover from "../../../Components/HeaderCover/HeaderCover";
const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const salad = menus.filter((item) => item.category === "salad");
  const pizza = menus.filter((item) => item.category === "pizza");
  const offered = menus.filter((item) => item.category === "offered");
  // // console.log(dessert);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menus</title>
      </Helmet>

      <HeaderCover
        img={img}
        title="OUR MENU"
        pera="Would you like to try a dish?"
      ></HeaderCover>

      {/* main cover  */}

      <div className="container">
        <div className="md:w-5/12 mx-auto text-center mt-32">
          <p className="text-yellow-600 mb-4">--- Don't Miss ---</p>
          <h3 className="text-3xl font-medium uppercase border-y-2 p-3">
            Today's offer
          </h3>
        </div>

        {/* offered menu items  */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu item  */}
        <MenuCategory
          items={dessert}
          img={dessertImg}
          title="dessert"
        ></MenuCategory>
        <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
        <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
        <MenuCategory items={soup} img={saladImg} title="soup"></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
