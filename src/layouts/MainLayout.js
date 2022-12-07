import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


function MainLayout() {
  
  return (
    <div className="main-layout">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
