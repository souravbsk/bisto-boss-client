import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Feature.css";
const Feature = () => {
  return (
    <div className="featureBg bg-no-repeat bg-fixed bg-cover py-32 st">
      <div className="container">
        <div className="md:w-4/12 mx-auto text-center mb-12">
          <p className="text-yellow-600 mb-4">--- FROM OUR MENU ---</p>
          <h3 className="text-3xl font-medium text-white uppercase border-y-2 p-3">
            Check it out
          </h3>
        </div>
        <div className="md:flex bg-opacity-60 text-white justify-center items-center">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:pl-10 text-xl">
            <p>March 20, 2023</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 text-white border-white border-b-2">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
