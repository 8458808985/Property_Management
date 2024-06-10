import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowProperty } from "../../Redux/Features/AddPropertySlice";
import { ShowOwner } from "../../Redux/Features/Adminownerslice";
import Loader from "../../Components/Loader";
import { ShowMaintainer } from "../../Redux/Features/Adminmaintainerslice";

const AdminDashboard = () => {

  const dispatch = useDispatch();
  const { property,loading } = useSelector((state) => state.property);
  const { Adminowner } = useSelector((state) => state.Adminowner);
  const { Adminmaintainer } = useSelector((state) => state.Adminmaintainer);

  useEffect(() => {
    dispatch(ShowProperty());
    dispatch(ShowOwner());
    dispatch(ShowMaintainer());
  }, []);

  if(loading){
    return <Loader/>
  }
  return (
    <>
    <div className="container-fluid">
      <h3 className="fw-bold ms-2">Dashboard</h3>
      <p className="ms-2" style={{color:"#737c91"}}>Wel Come back, Mr Admin 🖐</p>
      <div className="row">
        <div className="col-md-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title text-warning text-xl-left fs-5">
              <i className="fa-solid fa-house"></i>
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2" style={{color:"#737c91"}}>
                Total Property
                </h6>
                <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
              </div>
              <p className="mb-0 mt-2 text-danger">
                <span className="text-black ms-1 fs-2 fw-bold">
                  <small>{property.length}</small>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title text-info text-xl-left fs-5">
              <i className="fa-duotone fa-house"></i>
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2"style={{color:"#737c91"}}>
                Total Units
                </h6>
                <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
              </div>
              <p className="mb-0 mt-2 text-danger">
                <span className="text-black ms-1 fs-2 fw-bold">
                  <small>1</small>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title text-warning text-xl-left fs-5">
              <i className="fa-duotone fa-signal-bars fs-5"></i>
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2" style={{color:"#737c91"}}>
                Total Owner
                </h6>
                <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
              </div>
              <p className="mb-0 mt-2 text-danger">
                <span className="text-black ms-1 fs-2 fw-bold">
                  <small>{Adminowner.length}</small>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title text-success text-xl-left ">
              <i className="fa-duotone fa-signal-bars fs-5"></i>
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2" style={{color:"#737c91"}}>
                Total Maintainers
                </h6>
                <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
              </div>
              <p className="mb-0 mt-2 text-danger">
                <span className="text-black ms-1 fs-2 fw-bold">
                  <small>{Adminmaintainer.length}</small>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AdminDashboard
