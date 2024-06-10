import React from 'react'
import Navbar from "../../Components/Navbar"
import SideBar from '../../Tenants/Shared/SideBar'
import { Outlet } from 'react-router-dom'


const Tenant_Routes = ({props}) => {
  return (
      <div>
            <Navbar/>
            <div className="flex ">
        <SideBar/>
        <Outlet/>
        </div>
        </div>
  )
}

export default Tenant_Routes
