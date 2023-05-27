import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image,_id, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="bg-slate-900 top-0 mt-4 right-0 mr-4 px-4 text-white absolute">
          {price}
        </p>
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{name} </h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <Link to={`/order/${_id}`}>
            <button className="btn btn-outline border-0 text-black border-black border-b-2">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
