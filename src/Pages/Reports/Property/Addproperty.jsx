import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddPropertys } from "../../../Redux/Features/AddPropertySlice";
import { validationSchema } from "../../../Schema";
import { useState } from "react";

const Addproperty = () => {
  const dispatch = useDispatch();

  const initialValues = {
    propertyOwner: "",
    propertyName: "",
    numberofUnits: "",
    contactNumber: "",
    propertyDescription: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
    unitName: "",
    squareFeet: "",
    description: "",
    price: "",
    propertyType: "",
    rooms: "",
    kitchen: "",
    condition: "",
    baths: "",
    parking: "",
  };

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
  };

  const { errors, handleChange, touched, handleSubmit, values, resetForm} = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        try {
          const formData = new FormData();

          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          selectedImages.forEach((image) => {
            formData.append("images", image);
          });

          await dispatch(AddPropertys(formData)).unwrap();

          resetForm();
          setSelectedImages([]);

          toast.success("Property Added Successfully", {
            position: "top-center",
          });
        } catch (error) {
          toast.error("Failed to add property",{
            position:"top-center"
          });
        }
        console.log("formData")
      },
    });
  return (
    <>
      <ToastContainer />
      <div className="container">
      <div className="row mb-2">
        <div className="col-md-6">
          <h5 className="my-2">Add Property</h5>
        </div>
        <div className="col-md-3 offset-md-3">
          <nav aria-label="breadcrumb" className="float-md-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
            Add Property
              </li>
            </ol>
          </nav>
        </div>
      </div>
        <div
          className="p-3 shadow-sm rounded"
          style={{ backgroundColor: "rgb(114, 150, 218)" }}>
          <div className="row">
            <div className="col-md-12">
              <span
                className="   p-2 rounded-circle  "
                style={{ color: "white", backgroundColor: "#0072c0" }}>
                <i className="fa-solid  ms-1 fa-house"></i>{" "}
              </span>
              <span style={{ fontSize: "larger", color: "white" }}>
                <b className="ms-2">Property Information</b>
              </span>
            </div>
          </div>
        </div>
        <div
          className="container p-3 mt-2 shadow-sm rounded"
          style={{ backgroundColor: "#ffff" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Property Name
                    <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="propertyName"
                    className="form-control p-3"
                    placeholder="Property Name"
                    onChange={handleChange}
                    value={values.propertyName}
                  />
                  {errors.propertyName && touched.propertyName ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.propertyName}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Property Owner
                    <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="propertyOwner"
                    className="form-control p-3"
                    placeholder="Property Name"
                    onChange={handleChange}
                    value={values.propertyOwner}
                  />
                  {errors.propertyOwner && touched.propertyOwner ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.propertyOwner}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Number of Units
                    <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="numberofUnits"
                    className="form-control p-3"
                    placeholder="Number of Units"
                    onChange={handleChange}
                    value={values.numberofUnits}/>
                    
                  {errors.numberofUnits && touched.numberofUnits ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.numberofUnits}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Contact<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    className="form-control p-3"
                    placeholder="Number of Units"
                    onChange={handleChange}
                    value={values.contactNumber}
                  />
                  {errors.contactNumber && touched.contactNumber ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.contactNumber}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2 mt-3">
                  <label htmlFor="" className="form-label">
                    Description
                    <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                  </label>
                  <textarea
                    name="propertyDescription"
                    id=""
                    className="form-control"
                    placeholder="Description"
                    type="text"
                    onChange={handleChange}
                    value={values.propertyDescription}
                  ></textarea>
                  {errors.propertyDescription && touched.propertyDescription ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.propertyDescription}
                    </small>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="">
                <div className="d-flex ">
                  <div className="pt-3 ">
                    <span
                      className="  ps-2 p-2 rounded-circle  "
                      style={{ color: "white", backgroundColor: "#0072c0" }}
                    >
                      <i className="fa-light fa-location-dot"></i>{" "}
                    </span>{" "}
                  </div>
                  <div>
                    <p className="ms-2 p-0 m-0 mt-3">
                      <b style={{ color: "rgb(30, 95, 192)" }}>
                        Property Location
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 ">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Country <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="form-control p-3"
                    placeholder="Country"
                    onChange={handleChange}
                    value={values.country}
                  />
                  {errors.country && touched.country ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.country}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    State <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="form-control p-3"
                    placeholder="State"
                    onChange={handleChange}
                    value={values.state}
                  />
                  {errors.state && touched.state ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.state}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    City <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="form-control p-3"
                    placeholder="City"
                    onChange={handleChange}
                    value={values.city}
                  />
                  {errors.city && touched.city ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.city}
                    </small>
                  ) : null}
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="mb-2 mt-3">
                  <label htmlFor="" className="form-label">
                    Zip Code
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    className="form-control p-3"
                    placeholder="Zip Code"
                    onChange={handleChange}
                    value={values.zipCode}
                  />
                  {errors.zipCode && touched.zipCode ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.zipCode}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="mb-2 mt-3">
                  <label htmlFor="" className="form-label">
                    Address
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control p-3"
                    placeholder="Address"
                    onChange={handleChange}
                    value={values.address}
                  />
                  {errors.address && touched.address ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.address}
                    </small>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="">
                <div className="d-flex ">
                  <div className="pt-3 ">
                    <span
                      className="  ps-2 p-2 rounded-circle  "
                      style={{ color: "white", backgroundColor: "#0072c0" }}
                    >
                      <i className="fa-sharp fa-regular fa-building-un"></i>{" "}
                    </span>{" "}
                  </div>
                  <div>
                    <p className="ms-2 p-0 m-0 mt-3">
                      <b style={{ color: "rgb(30, 95, 192)" }}>Add Unit</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Unit Name{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="unitName"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.unitName}
                  />
                  {errors.unitName && touched.unitName ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.unitName}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    price <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.price}
                  />
                  {errors.price && touched.price ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.price}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    propertyType{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="propertyType"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.propertyType}
                  />
                  {errors.propertyType && touched.propertyType ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.propertyType}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                  Rooms{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="rooms"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.rooms}
                  />
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                  kitchen{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="kitchen"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.kitchen}
                  />
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                  parking{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="parking"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.parking}
                  />
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                  Condition{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="condition"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.condition}
                  />
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                  Baths{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="baths"
                    className="form-control p-2"
                    placeholder="Unit Name"
                    onChange={handleChange}
                    value={values.baths}
                  />
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Square Feet{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="squareFeet"
                    className="form-control p-2"
                    placeholder="Square Feet"
                    onChange={handleChange}
                    value={values.squareFeet}
                  />
                  {errors.squareFeet && touched.squareFeet ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.squareFeet}
                    </small>
                  ) : null}
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-2 mt-3">
                  <label htmlFor="" className="form-label">
                    Images <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="file"
                    name="images"
                    className="form-control p-2"
                    onChange={handleImageChange}
                    multiple
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2 my-3">
                  <label htmlFor="" className="form-label">
                    Description{" "}
                    <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="form-control p-2"
                    placeholder="Description"
                    onChange={handleChange}
                    value={values.description}
                  />
                  {errors.description && touched.description ? (
                    <small className="text-danger fw-bolder">
                      <i className="fa-solid fa-triangle-exclamation ms-2"></i>{" "}
                      {errors.description}
                    </small>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="float-end">
                  <button
                    type="submit"
                    className="btn border-0 rounded-1  mx-4 text-light "
                    style={{ backgroundColor: "#004ec2" }}
                  >
                    Submit{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproperty;
