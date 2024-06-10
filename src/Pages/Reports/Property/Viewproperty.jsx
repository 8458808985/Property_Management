import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader";
import { useEffect } from "react";
import { ShowProperty } from "../../../Redux/Features/AddPropertySlice";


const Viewproperty = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { property, loading } = useSelector((state) => state.property);
  const Singlepro = property.find((pro) => pro.id.toString() === id.toString());

  useEffect(() => {
    if(id){
      dispatch(ShowProperty());
    }
  }, [id,dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (!Singlepro) {
    return <div>Property not found</div>;
  }
 
  
  return (
    <>
    <div className="w-100">
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h5 className="my-2">More Details</h5>
        </div>
        <div className="col-md-3 offset-md-3">
          <nav aria-label="breadcrumb" className="float-md-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Property
              </li>
            </ol>
          </nav>
        </div>
      </div>
      </div>
       <hr className="p-0 " />
     <div className="container">
    <h4>{Singlepro.propertyName}</h4>
    <p> <i className="fa-solid fa-location-dot me-1 text-info"></i> {Singlepro.address}</p>
     </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          {Singlepro.images.map((images) => (
            <>
              <div className="carousel-item active" style={{height:"400px"}}>
                <img src={images} className="d-block w-100" style={{height:"100%"}} alt="..." />
              </div>{" "}
            </>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="property-details mt-4">
        <h2></h2>
        <p>
          <strong>Owner:</strong> {Singlepro.propertyOwner}
        </p>
        <p>
          <strong>Description:</strong> {Singlepro.propertyDescription}
        </p>
        <p>
          <strong>Address:</strong> 
        </p>
        <p>
          <strong>Rooms:</strong> {Singlepro.rooms}
        </p>
        <p>
          <strong>Kitchen:</strong> {Singlepro.kitchen}
        </p>
        <p>
          <strong>Condition:</strong> {Singlepro.condition}
        </p>
        <p>
          <strong>Price:</strong> {Singlepro.price}
        </p>
      </div>
      </div>
      </>
  );
};

export default Viewproperty;
