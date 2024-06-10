import React from "react";
import SideBar from "../../Admin/Shared/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar"
import AdminDashboard from "../../Admin/AdminDashboard/AdminDashboard";

const 
Admin_Routes=({props})=>{
    return (
        <div>
          <Navbar />
          <div className="flex ">   
            <SideBar />
            <Outlet />
          </div>
        </div>
      );
}
export default Admin_Routes