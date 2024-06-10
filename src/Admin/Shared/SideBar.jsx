import { useState } from "react";
import { Card, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon, ChevronLeftIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function SideBar() {
  const [open, setOpen] = useState(0);
  const [openBar, setOpenBar] = useState(true);

  const handleToggleSidebar = () => {
    setOpenBar(!openBar);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
    
      <Card
        className={`bg-white h-[calc(100vh-2rem)] w-full p-2 shadow-md shadow-blue-gray-900/5 border-r-2 border-gray-200 ease-in-out duration-150 transition-max-w ${openBar ? "max-w-[15rem] " : "max-w-[2rem]" }`} >
        <button onClick={handleToggleSidebar}>
          {openBar ? (
            <ChevronLeftIcon className="h-10 w-10 text-cyan-500 bg-slate-50 rounded-full p-2" />
          ) : (
            <ChevronRightIcon className="h-10 w-10 text-cyan-500 bg-slate-50 rounded-full p-2" />
          )}
        </button>
        <List style={{ display: openBar ? "block" : "none" }}>

          {/* dashboard Section start */}
          <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
              <i className="fa-solid fa-arrows-to-dot fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link  className="link-underline link-underline-opacity-0 text-black"
              to={"/admin"}>
              Dashboard
            </Link>
          </ListItem>
          {/* dashboard Section end */}

          {/* admin owner Section start */}
          <ListItem className="hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i className="fa-regular fa-user fs-5" style={{color: "#74C0FC"}}></i>
            </ListItemPrefix>
            <Link to={"admin_owner"} className="link-underline link-underline-opacity-0 text-dark">
                Owner
            </Link>
          </ListItem>
          {/* admin owner Section end */}

             {/* admin maintainer Section start */}
             <ListItem className="hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i className="fa-regular fa-user fs-5" style={{color: "#74C0FC"}}></i>
            </ListItemPrefix>
            <Link to={"admin_maintainer"} className="link-underline link-underline-opacity-0 text-dark">
              Maintainer
            </Link>
          </ListItem>
          {/* admin maintainer Section end */}

          {/* admin profile section start */}
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-2 flex items-center justify-start gap-2">
                <div>
                  <i className="fa-duotone fa-user-nurse fs-5" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Profile
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"admin_profile"} className="link-underline link-underline-opacity-0 text-dark">
                    <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i> My Profile
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"admin_change_password"} className="link-underline link-underline-opacity-0 text-dark">
                  <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i> Change Password </Link>
                </ListItem>

              </List>
            </AccordionBody>
          </Accordion>
          {/* admin profile section end  */}
        </List>
      </Card>
    </>
  );
}

export default SideBar;
