import {  Menu,  MenuHandler,  MenuList, MenuItem,} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const logoutData = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    toast.error('Logged out successfully!',{
      position:"top-center"
    });

    setTimeout(() => {
      navigate('/'); 
    }, 1000);
  }

  useEffect(() => {
    const localName = localStorage.getItem("name");
    const localToken = localStorage.getItem("token");
    const localRole = localStorage.getItem("role");

    if (localName) {
      setName(localName);
    }
    if (localToken) {
      setToken(localToken);
    }
    if (localRole) {
      setRole(localRole);
    }
  }, []); 


  return (
    <>
    <ToastContainer/>
      <div>
        <div className="bg-white">
          <div className="flex-col flex">
            <div className="w-full border-b-2 border-gray-200">
              <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
                <h1 className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-700 flex gap-1 items-center">
                  <img
                    src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                    className="block btn- h-8 w-auto"
                    alt=""
                  />
                  Property Management
                </h1>

                <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 hover:bg-slate-50 rounded-full p-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                  </div>

                  <Menu>
                    <MenuHandler>
                      <div className="justify-center items-center flex relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10 hover:bg-slate-50 rounded-full p-2 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </div>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem className="hover:bg-cyan-50 p-2 flex gap-2 font-semibold rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      {name}
                      </MenuItem>
                      <MenuItem className="hover:bg-cyan-50 p-2 flex gap-2 font-semibold rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                          />
                        </svg>
                       <span onClick={logoutData}>Logout</span> 
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
