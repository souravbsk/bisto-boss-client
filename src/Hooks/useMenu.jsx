import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //     });
  // }, []);

  const {data:menus = [], isLoading:loading, refetch} = useQuery({
    queryKey:["menu"],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/menu')
     
      return res.json();

    },
  })
// // console.log(data);

  return [menus,loading,refetch];
};

export default useMenu;
