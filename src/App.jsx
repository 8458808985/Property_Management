import { Route, Routes } from "react-router-dom";
import Admin_Routes from "./Components/Admin_Routes/Admin_Routes";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import AdminOwner from "./Admin/AdminOwner/AdminOwner";
import Adminprofile from "./Admin/AdminProfile/Adminprofile";
import AdminChangePassword from "./Admin/AdminProfile/AdminChangePassword";
import Tenant_Routes from "./Components/Tenant_Routes/Tenant_Routes";
import TenantsDashboard from "./Tenants/TenantsDashboard/TenantsDashboard";
import Tenantinvoice from "./Tenants/Tenantinvoice/Tenantinvoice";
import TenantTickets from "./Tenants/TenantTickets/TenantTickets";
import Tenantinformation from "./Tenants/Tenantinformation/Tenantinformation";
import TenantsRequest from "./Tenants/TenantsRequest/TenantsRequest";
import Tenantdocument from "./Tenants/Tenantdocument/Tenantdocument";
import Tenantsprofile from "./Tenants/Tenantsprofile/Tenantsprofile";
import TenantsChangepassword from "./Tenants/Tenantsprofile/TenantsChangepassword";
import Owner_Routes from "./Components/Owner_Routes/Owner_Routes";
import OwnerDashboard from "./Pages/Dashboard/OwnerDashboard";
import Addproperty from "./Pages/Reports/Property/Addproperty";
import Property from "./Pages/Reports/Property/Property";
import Tenants from "./Pages/Tenants/Tenants";
import Tenant_history from "./Pages/Tenants/Tenant_history";
import AddTenants from "./Pages/Tenants/AddTenants";
import Owner_invoices from "./Pages/billing center/Owner_invoices";
import Recurring_setting from "./Pages/billing center/Recurring_setting";
import Owner_expenses from "./Pages/Expenses/Owner_expenses";
import Owner_documents from "./Pages/Documents/Owner_documents";
import Owner_tickets from "./Pages/Ticket/Owner_tickets";
import Owner_information from "./Pages/Information/Owner_information";
import Owner_maintainer from "./Pages/Mantanance/Owner_maintainer";
import Owner_maintanance_request from "./Pages/Mantanance/Owner_maintanance_request";
import Owner_Notice_Board from "./Pages/Notice Board/Owner_Notice_Board";
import Profile from "./Pages/profile/Profile";
import ChangePassword from "./Pages/profile/ChangePassword";
import { Protected } from "./Components/Protect_Routes/Protected";
import Login from "./User/Login";
import Viewproperty from "./Pages/Reports/Property/Viewproperty";
import Register from "./User/Register";
import AdminMaintainer from "./Admin/AdminMaintainer/AdminMaintainer";
import Maintainer_Routes from "./Components/Mainainer_Routes/Maintainer_Routes";
import MaintainerDashboard from "./Maintainer/MaintainerDashboard/MaintainerDashboard";
import MaintainerInformation from "./Maintainer/MaintainerInformations/MaintainerInformation";
import MaintainerTickets from "./Maintainer/MaintainerTickets/MaintainerTickets";
import MaintainerRequest from "./Maintainer/MaintainerRequest/MaintainerRequest";
import Maintainerprofile from "./Maintainer/Maintainerprofile/Maintainerprofile";
import MaintainerChangepassword from "./Maintainer/Maintainerprofile/MaintainerChangepassword";



function MyComponent() {

  return (
    
      <div className="App">
<Routes>
{/* user routing */}
<Route path="/" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>

{/* admin routing */}
<Route path="/admin" element={<Protected Component={Admin_Routes}/>}>
  <Route index element={<AdminDashboard/>}/>
  <Route path='admin_owner' element={<AdminOwner/>}/>
  <Route path='admin_maintainer' element={<AdminMaintainer/>}/>
  <Route path='admin_profile' element={<Adminprofile/>}/>
  <Route path='admin_change_password' element={<AdminChangePassword/>}/>
<Route />
</Route>

{/* Tenant Routing */}

<Route path="/tenant" element={<Protected Component={Tenant_Routes}/>}>
  <Route index element={<TenantsDashboard/>}/>
  <Route path="Tenant_invoice" element={<Tenantinvoice/>}/>
  <Route path="Tenant_Tickets" element={<TenantTickets/>}/>
  <Route path="Tenant_infomation" element={<Tenantinformation/>}/>
  <Route path="tenants_request" element={<TenantsRequest/>}/>
  <Route path="Tenant_Documents" element={<Tenantdocument/>}/>
  <Route path="tenants_profile" element={<Tenantsprofile/>}/>
  <Route path="tenants_changepassword" element={<TenantsChangepassword/>}/>
</Route>

{/* Owner Routing */}
<Route path="/owner" element={<Protected Component={Owner_Routes}/>}>
  <Route index element={<OwnerDashboard/>}/>
  <Route path="addproperty" element={<Addproperty/>}/>
  <Route path="Property" element={<Property/>}/>
  <Route path="/owner/viewpro/:id" element={<Viewproperty />} />
  <Route path="tenants" element={<Tenants/>}/>  
  <Route path="tenant_history" element={<Tenant_history/>}/>  
  <Route path="add_tenants" element={<AddTenants/>}/>  
  <Route path="owner_voices" element={<Owner_invoices/>}/>  
  <Route path="recurring_setting" element={<Recurring_setting/>}/>  
  <Route path="owner_expense" element={<Owner_expenses/>}/>  
  <Route path="owner_documents" element={<Owner_documents/>}/>  
  <Route path="owner_tickets" element={<Owner_tickets/>}/>  
  <Route path="owner_information" element={<Owner_information/>}/>  
  <Route path="owner_maintainer" element={<Owner_maintainer/>}/>   
  <Route path="owner_maintainance_request" element={<Owner_maintanance_request/>}/>   
  <Route path="owner_notice_board" element={<Owner_Notice_Board/>}/>   
  <Route path="owner_profile" element={<Profile/>}/>   
  <Route path="owner_change_password" element={<ChangePassword/>}/>   
</Route>

{/* Mainatainer Routing */}
<Route path="/maintainer" element={<Protected Component={Maintainer_Routes}/>}>
  <Route index element={<MaintainerDashboard/>}/>
  <Route path="maintainer_information" element={<MaintainerInformation/>}/>
  <Route path="maintainer_tickets" element={<MaintainerTickets/>}/>
  <Route path="maintainer_request" element={<MaintainerRequest/>}/>
  <Route path="maintainer_profile" element={<Maintainerprofile/>}/>
  <Route path="maintainer_changepassword" element={<MaintainerChangepassword/>}/>

</Route>

</Routes>

       </div>
  
  
  );
}

export default MyComponent;
