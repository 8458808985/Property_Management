import React from 'react'
import Navbar from '../../Components/Navbar'
import SideBar from '../../Pages/Shared/SideBar'
import { Outlet } from 'react-router-dom'

const Owner_Routes = ({props}) => {
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

export default Owner_Routes
