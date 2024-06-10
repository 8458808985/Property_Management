import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePropertys, ShowProperty,
} from "../../../Redux/Features/AddPropertySlice";
import Loader from "../../../Components/Loader";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";

const Property = () => {
  const [isDelete, setIsDelete] = useState(null);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const navigate= useNavigate()
  const dispatch = useDispatch();

  // Show property
  const { property, loading } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(ShowProperty());
  }, [dispatch]);


  if (loading) {
    return <Loader />;
  }

  // Delete property
  const handleClose = () => {
    setShow(false);
    setIsDelete(null);
  };

  const handleDeleteProperty = (did) => {
    setIsDelete(did);
    setShow(true);
  };

  const confirmDelete = async (id) => {
    const resultAction = await dispatch(DeletePropertys(id));
    if (DeletePropertys.fulfilled.match(resultAction)) {
      toast.success("Property deleted successfully!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Failed to delete property. Please try again.", {
        position: "bottom-center",
      });
    }
    handleClose();
  };

  // Filter properties based on search
  const filteredProperties = search ? property.filter((prop) =>
        prop.propertyName.toLowerCase().includes(search.toLowerCase()) || 
        prop.address.toLowerCase().includes(search.toLowerCase())
)
    : property;

// View property
 const handleViewProperty=(id)=>(
      navigate(`/owner/viewpro/${id}`)
 )

  return (
    <>
      <ToastContainer />
      <div className="container-fluid py-4 px-0">
      <div className="row">
        <div className="col-md-6">
        <h4 className="fw-bold ms-3 p-2">All Properties</h4>
        </div>
        <div className="col-md-3 offset-md-3">
          <nav aria-label="breadcrumb" className="float-md-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
              All Properties
              </li>
            </ol>
          </nav>
        </div>
      </div>
        <div className="row ">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
           <div className="col-md-4">
            <div className="input-group border">
              <input 
                type="text" 
                className="form-control p-2" 
                onChange={(e) => setSearch(e.target.value)}  
                placeholder="Search...." 
              />
              <button className="btn searchBtn px-3">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            </div>
       
        </div>
        <div className="row mt-2">
          {filteredProperties.map((property) => (
            <div className="col-md-4 mb-3" key={property.id}>
              <div className="card p-3 shadow border-0">
                <div className="" style={{ height: "200px" }}>
                  <img
                    src={property.images[0]}
                    className="card-img-top"
                    alt="images"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    {property.propertyName}
                  </h5>
                  <p className="card-text fw-bold">
                    <i className="fa-solid fa-location-dot me-1 text-info"></i>{" "}
                    {property.address}
                  </p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">
                      {property.rooms} Rooms Available
                    </p>
                    <p className="card-text">
                      {property.kitchen} Kitchen Available
                    </p>
                  </div>
                  <p>
                    <span className="fw-bold">Condition: </span>{" "}
                    {property.condition}
                  </p>
                  <div className="float-end">
                    <i
                      className="fa-solid fa-trash text-danger fs-4"
                      onClick={() => handleDeleteProperty(property.id)}
                    ></i>
                    <i className="fa-solid fa-pen-to-square fs-4 text-info ms-2"></i>
                    <i className="fa-solid fa-eye fs-4 text-warning ms-2"  onClick={() => handleViewProperty(property.id)}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirm Delete Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this property?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => confirmDelete(isDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Property;
