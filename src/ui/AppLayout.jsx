import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import { useEffect,useState } from "react";
export default function AppLayout() {
  // const navigate = useNavigation()
  useEffect(()=>{
    // console.log(navigate.state)
    // if(navigate.state === "idle"){
    //   setOpen(false)
    // }
  },[])
  return (
    <div>
      <Header></Header>
      <main>
      <Outlet></Outlet>
      </main>
    </div>
  )
}
