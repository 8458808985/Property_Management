import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar"
import SideBar from "../../Maintainer/Shared/SideBar";

const Maintainer_Routes = ({ props }) => {
    return (

        <div>
            <Navbar />
            <div className="flex ">
                <SideBar />
                <Outlet />
            </div>
        </div>


    )
}

export default Maintainer_Routes