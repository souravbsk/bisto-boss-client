import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user,loading } = useContext(AuthContext);

  // const token = localStorage.getItem("bistroBoosToken")

    const [axiosSecure] = useAxiosSecure();
    const { refetch,isLoading, data: cart = [] } = useQuery({

      queryKey: ["carts", user?.email],
 
      // queryFn: async  () => {
      //     const res = await fetch(`https://bistro-boss-server-souravbsk.vercel.app/carts?email=${user?.email}`,{
      //       headers:{
      //         authorization:`bearer ${token}`
      //       }
      //     })
      //     return res.json();
      // },
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/carts?email=${user?.email}`);
        // console.log("res from axios", res);
        return res.data;
      },
    });
    return [cart, refetch,isLoading];
  
};

export default useCart;
