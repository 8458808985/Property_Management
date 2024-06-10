import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BASE_URL from "../Urls/baseurl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      const { status, data } = response;
      if (status === 200) {
        const { role } = data;
        // Store user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", role);
        localStorage.setItem("name", data.name);

        // Show success message based on role
        switch (role) {
          case "tenant":
            toast.success("Successfully Logged In as Tenant", {
              position: "top-center",
            });
            break;
          case "admin":
            toast.success("Successfully Logged In as Admin", {
              position: "top-center",
            });
            break;
          case "owner":
            toast.success("Successfully Logged In as Owner", {
              position: "top-center",
            });
            break;
          case "maintainer":
            toast.success("Successfully Logged In as Maintainer", {
              position: "top-center",
            });
            break;
          default:
            break;
        }

        // Navigate after 1 second
        setTimeout(() => {
          navigate(`/${role}`);
        }, 1000);
      } else {
        // Handle non-200 response status
        toast.error("Login failed. Please try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.", {
        position: "top-center",
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
                      <h4>Log In</h4>
                      <hr />
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} name="frm">
                  <div className="row gy-3 gy-md-2 overflow-hidden">
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
                        required=""
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
                      
                        required=""
                        placeholder="*******"
                        value={password}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input mt-3"
                          type="checkbox"
                          defaultValue=""
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          className="form-check-label text-secondary mt-3"
                          htmlFor="remember_me"
                        >
                          i Agree to the{" "}
                          <a href="" style={{ color: "black" }}>
                            Terms &amp; Condition
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
                          Log in now
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
                       Don't Have a account  <Link to="/register">Register</Link>
                        </span>
                    </div>
                  </div>
                </div>
               
                <div className="row mb-0">
                  <div className="col-12">
                    <hr className="mt-3 mb-2 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-2 flex-column flex-md-row justify-content-md-end">
                      <Link
                        href="/"
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

export default Login;
