import { useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  // XIcon,
} from "@heroicons/react/24/outline";
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
        className={`bg-white h-[calc(100vh-2rem)] w-full p-2 shadow-md shadow-blue-gray-900/5 border-r-2 border-gray-200 ease-in-out duration-150 transition-max-w ${openBar ? "max-w-[15rem] " : "max-w-[2rem]"
          }`}
      >
        <button onClick={handleToggleSidebar}>
          {openBar ? (
            <ChevronLeftIcon className="h-10 w-10 text-cyan-500 bg-slate-50 rounded-full p-2" />
          ) : (
            <ChevronRightIcon className="h-10 w-10 text-cyan-500 bg-slate-50 rounded-full p-2" />
          )}
        </button>
        <List style={{ display: openBar ? "block" : "none" }}>
          {/* maintainer_dashboard Section start */}
          <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i className="fa-solid fa-arrows-to-dot fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"/maintainer"}
            >
              Dashboard
            </Link>
          </ListItem>
          {/* maintainer_dashboard Section end */}

            {/* maintainer_ticket Section start */}
            <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i className="fa-sharp fa-solid fa-file-check fs-5"  style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"maintainer_tickets"}
            >
              Tickets
            </Link>
          </ListItem>
          {/* maintainer_ticket Section end */}

            {/* maintainer_information Section start */}
            <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i className="fa-solid fa-circle-info fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"maintainer_information"}
            >
              Information
            </Link>
          </ListItem>
          {/* maintainer_information Section end */}

           {/* maintainer_information Section start */}
           <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i className="fa-solid fa-code-pull-request fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"maintainer_request"}
            >
              Maintenance Request
            </Link>
          </ListItem>
          {/* maintainer_information Section end */}

          {/* Property section start */}
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
                className="border-b-0 p-2 flex items-center justify-start gap-2"
              >
                <div>
                  <i className="fa-solid fa-house-building" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                 Profile{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"maintainer_profile"} className="link-underline link-underline-opacity-0 text-dark">
                  <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i> My Profile
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"maintainer_changepassword"} className="link-underline link-underline-opacity-0 text-dark">
                  <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i>   Change Password </Link>
                </ListItem>
             
              </List>
            </AccordionBody>
          </Accordion>
          {/* Property section end  */}
        </List>
      </Card>
    </>
  );
}

export default SideBar;
