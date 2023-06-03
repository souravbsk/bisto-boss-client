import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
const  MyCard = () => {
  const [cart,refetch] = useCart();
  // // console.log(cart);
  // console.log(cart);
  const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0) || 0;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Delete This Item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // // console.log(data);
            if (data.deletedCount > 0) {
                refetch()
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="py-12 bg-white">
      <SectionTitle subTitle="My Cart" headingTitle="WANNA ADD MORE?"></SectionTitle>
      <div className="uppercase flex items-center mb-5 justify-between">
        <h2 className="text-xl font-semibold">Total orders: {cart.length}</h2>
        <h2 className="text-xl font-semibold">Total price: ${totalPrice}</h2>
        <Link to="/dashboard/payment"><button className="btn btn-sm btn-warning">Pay</button></Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md bg-red-700 text-white "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyCard;
