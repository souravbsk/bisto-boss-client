import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ManageItem = () => {
  const [menus,loading, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  // console.log(menus);

  const handleRemoveItems = (id) => {
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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };



  const handleUpdate = () => {
    
  }

  return (
    <div className="py-12 w-full">
      <SectionTitle
        headingTitle="MANAGE ALL ITEMS"
        subTitle="Hurry Up!"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menus?.map((item, i) => (
                <tr>
                  <th>{i + 1}</th>
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
                  <td>
                    <div className="font-bold">{item.name}</div>
                  </td>
                  <td className="text-left">${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="btn btn-md border-0 bg-[#D1A054] text-white"
                    >
                      <FaEdit></FaEdit>
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleRemoveItems(item._id)}
                      className="btn btn-md border-0 bg-red-600 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
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
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
