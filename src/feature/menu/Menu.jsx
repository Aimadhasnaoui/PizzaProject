// import { useLoaderData } from "react-router-dom"
import { getMenu } from "../../servises/apiRestaurant"
import MenuItem from "./MenuItem"
import { useEffect, useState } from "react";
import Loader from '../../ui/Loader'

export default function Menu() {
  const [open, setOpen] = useState(true);
  const [menu ,setmenu] = useState([]);
  useEffect(()=>{
    const featchingData = MenuData()
    // console.log(featchingData)
    featchingData.then((data)=>{
      // console.log(data)
      setmenu(data)
      setOpen(false)
    })
  },[])
  return (
    <div className="mx-auto flex justify-center py-6 flex-col items-center mt-20 ">
      <Loader open={open} setOpen={setOpen}></Loader>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
      ></MenuItem>))}
    </div>
  )
}
export async function MenuData() {
  const menu = await getMenu()
  return menu
}

