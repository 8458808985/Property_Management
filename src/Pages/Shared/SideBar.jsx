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
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
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
          {/* dashboard Section start */}
          <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
              <i class="fa-solid fa-boxes-stacked fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"/owner"}
            >
             Dashboard
            </Link>
          </ListItem>
          {/* dashboard Section end */}

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
                  <i class="fa-solid fa-house-building" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Property{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"Property"} className="link-underline link-underline-opacity-0 text-dark">
                    View All Property
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"addproperty"} className="link-underline link-underline-opacity-0 text-dark"> Add Property{" "} </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          {/* Property section end  */}


             {/* Property Tenant start */}
             <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-2 flex items-center justify-start gap-2"
              >
                <div>
 
                  <i class="fa-regular fa-user" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                 Tenants{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"tenants"} className="link-underline link-underline-opacity-0 text-dark">
                    All Tenants
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"tenant_history"} className="link-underline link-underline-opacity-0 text-dark"> Tenants History{" "} </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          {/* Property Tenant end  */}
          <Accordion
            open={open === 4}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-2 flex items-center justify-start gap-2">
                <div>
                  {/* <i className="fa-duotone fa-user-nurse fs-5" style={{ color: "#74C0FC" }}></i> */}
                  <i class="fa-sharp fa-solid fa-wallet fs-5" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Billing Center
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"owner_voices"} className="link-underline link-underline-opacity-0 text-dark">
                    <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i> All invoices
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"recurring_setting"} className="link-underline link-underline-opacity-0 text-dark">
                  <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i>   Recurring setting{" "} </Link>
                </ListItem>

              </List>
            </AccordionBody>
            
          </Accordion>

{/* .................................................................................................. */}

<ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i class="fa-sharp fa-light fa-book fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"owner_expense"}
            >
             Expenses
            </Link>
          </ListItem>
{/* ................................................................................................. */}

<ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i class="fa-solid fa-file fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"owner_documents"}
            >
             Documents
            </Link>
          </ListItem>
{/* ........................................................................................................ */}
<ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i class="fa-light fa-bookmark fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"owner_tickets"}
            >
             Tickets
            </Link>
          </ListItem>
{/* .............................................................................................................. */}

<ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i class="fa-sharp fa-solid fa-circle-info fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"owner_information"}
            >
             Information
            </Link>
          </ListItem>
{/* .................................................................................................................... */}

<Accordion
            open={open === 7}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="border-b-0 p-2 flex items-center justify-start gap-2">
                <div>
                  <i className="fa-thin fa-users fs-5" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                 Maintains
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"owner_maintainer"} className="link-underline link-underline-opacity-0 text-dark">
                    <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i>Maintainers
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"owner_maintainance_request"} className="link-underline link-underline-opacity-0 text-dark">
                  <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i>  Maintainance Request{" "} </Link>
                </ListItem>

              </List>
            </AccordionBody>
            
          </Accordion>
{/* ....................................................................................................................... */}

<ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
            <i class="fa-light fa-window fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"owner_notice_board"}
            >
             Notice Board
            </Link>
          </ListItem>

{/* ..................................................................................................................... */}
          {/* admin profile section start */}
          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
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
                  <Link to={"owner_profile"} className="link-underline link-underline-opacity-0 text-dark">
                    <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i> My Profile
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"owner_change_password"} className="link-underline link-underline-opacity-0 text-dark">
                  <i className="fa-duotone fa-circle-dot"  style={{ color: "#74C0FC" }}> </i>   Change Password{" "} </Link>
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
