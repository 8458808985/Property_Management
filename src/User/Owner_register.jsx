import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BASE_URL from "../Urls/baseurl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Owner_register = () => {

    const [formData, setFormData] = useState({
        ownerName: "",
        contact: "",
        profilePic: null,
        occupation: "",
        aadharCard: null,
        panCard: null,
        drivingLicence: null,
        email: "",
        password: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const FileHandler = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0]});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const formDataToSend = new FormData();
          formDataToSend.append("ownerName", formData.ownerName);
          formDataToSend.append("contact", formData.contact);
          formDataToSend.append("occupation", formData.occupation);
          formDataToSend.append("email", formData.email);
          formDataToSend.append("password", formData.password);
          formDataToSend.append("profilePic", formData.profilePic);
          formDataToSend.append("aadharCard", formData.aadharCard);
          formDataToSend.append("panCard", formData.panCard);
          formDataToSend.append("drivingLicence", formData.drivingLicence);
    
          const response = await axios.post(`${BASE_URL}/owner`, formDataToSend);
          if(response === 200){

            toast.success("Registered successfully", {
                position: "top-center"
              });
              setTimeout(() => {
                frm.reset();
                navigate("/");
              }, 1000); // 1000 milliseconds = 1 second
            } else {
              toast.error(response.data.message, {
                position: "top-center"
              });
            }
          }

          // Add any further handling for success here, like showing a success message or redirecting
         catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred. Please try again.", {
            position: "top-center"
          });
          // Handle error appropriately, like displaying an error message to the user
        }
      };
    
  
  return (
    <>
    <ToastContainer />
    <section className="p-1 p-md-1 p-xl-1">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6">
              <img
                className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                loading="lazy"
                src="https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="BootstrapBrain Logo"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-4">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-2">
                      <h4>Signup </h4>
                      <hr />
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} name="frm" method="post" encType="multipart/form-data">
                  <div className="row gy-3 gy-md-2 overflow-hidden">
                    <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Owner Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control p-3"
                        name="ownerName" 
                        value={formData.ownerName}
                        placeholder="Enter Your Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Contact Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control p-3"
                        name="contact"
                        placeholder="Enter Your Contact"
                        required
                        value={formData.contact}

                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Profile Picture <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control p-3"
                        name="profilePic"
                        placeholder="Enter Your Contact Number"
                        required
                        onChange={FileHandler}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Driving Licence <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control p-3"
                        name="drivingLicence"
                        onChange={FileHandler}
                      />
                    </div> <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Aadhar Card <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control p-3"
                        name="aadharCard"
                        onChange={FileHandler}
                        
                      />
                    </div> <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Pan Card <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control p-3"
                        name="panCard"
                        onChange={FileHandler}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="name" className="form-label my-2">
                      Occupation <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control p-3"
                        name="occupation"
                        value={formData.occupation}

                        placeholder="Enter Your Occupation"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="col-6">
                      <label htmlFor="email" className="form-label my-2">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}

                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label my-2">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control p-3"
                        name="password"
                        value={formData.password}

                        required
                        placeholder="*******"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input mt-3"
                          type="checkbox"
                          name="agree"
                         
                        />
                        <label
                          className="form-check-label text-secondary mt-3"
                          htmlFor="agree"
                        >
                          I agree to the{" "}
                          <a href="/terms" style={{ color: "black" }}>
                            Terms &amp; Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-success my-3 p-3"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row mb-0">
                  <div className="col-12">
                    <hr className="mt-3 mb-2 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-2 flex-column flex-md-row justify-content-md-start">
                      <span className="link-secondary text-decoration-none">
                        Already have an account? <Link to="/">Log in</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col-12">
                    <hr className="mt-3 mb-2 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-2 flex-column flex-md-row justify-content-md-end">
                      <Link
                        to="/forgot-password"
                        className="link-secondary text-decoration-none"
                      >
                        Forgot password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Owner_register
