  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate, Link } from "react-router-dom";
  import BASE_URL from "../Urls/baseurl";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!agree) {
        toast.error("You must agree to the terms and conditions", {
          position: "top-center"
        });
        return;
      }
      try {
        const response = await axios.post(`${BASE_URL}/maintainer`, { name, email, password });
        if (response.status === 200) {
          // Show success message
          toast.success("Registered successfully", {
            position: "top-center"
          });
    
          // Delay navigation for 1 second
          setTimeout(() => {
            setName("");
            setEmail("");
            setPassword("");
            setAgree(false);
            navigate("/");
          }, 1000); // 1000 milliseconds = 1 second
        } else {
          toast.error(response.data.message, {
            position: "top-center"
          });
        }
      } catch (err) {
        console.error(err);
        toast.error("An error occurred. Please try again.", {
          position: "top-center"
        });
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
                    <form onSubmit={handleSubmit} name="frm">
                      <div className="row gy-3 gy-md-2 overflow-hidden">
                        <div className="col-12">
                          <label htmlFor="name" className="form-label my-2">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            required
                            autoComplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label my-2">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control p-3"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            autoComplete="off"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="password" className="form-label my-2">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control p-3"
                            name="password"
                            id="password"
                            autoComplete="off"
                            required
                            placeholder="*******"
                            value={password}
                          />
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-3"
                              type="checkbox"
                              name="agree"
                              id="agree"
                              checked={agree}
                              onChange={(e) => setAgree(e.target.checked)}
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
    );
  };

  export default Register;
