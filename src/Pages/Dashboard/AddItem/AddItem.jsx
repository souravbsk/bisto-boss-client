import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();

  const imgHostURL = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  // console.log(imgHostURL);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgHostURL, {
      method: "POSt",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data?.display_url;
          const { name, category, price, recipe } = data;
          const newItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: imgUrl,
          };
          // console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Item Added Success",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            }
          });
        }
      });
  };
  // // console.log(errors);
  return (
    <div className="py-12">
      <SectionTitle
        headingTitle="ADD AN ITEM"
        subTitle="What's new?"
      ></SectionTitle>
      <div className="p-12 bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex mb-5 justify-between gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="Category"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soups">Soups</option>
                <option value="Desserts">Desserts</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="Price"
                {...register("price", { required: true })}
                placeholder="Recipe name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-5 w-full">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              type="text"
              {...register("recipe", { required: true })}
              placeholder="Recipe name"
              className="input p-3 h-48 resize-none input-bordered w-full"
            ></textarea>
          </div>
          <div className="form-control mb-8 w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div>
            <button type="submit" className="user-btn">
              <span>Add Item</span> <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
