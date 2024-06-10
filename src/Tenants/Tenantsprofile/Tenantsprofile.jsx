
const Tenantsprofile = () => {
  return (
    <>
      <>
      <div>
        <div className="container">
          <nav aria-label="breadcrumb" className="">
            <ol className="breadcrumb d-flex justify-content-between">
              <div >
                <li className="mx-5" style={{ fontWeight: "600", fontSize: "18px" }}> My Profile</li>

              </div>
              <div className="d-flex justify-content-between">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Invoices
                </li>
                <li className="breadcrumb-item active" style={{ fontWeight: "700" }}>My Profile</li>
              </div>

            </ol>
          </nav>
        </div>
<hr />

        {/* form start */}
        <div className="container-fluid mb-5 ">
          <div className="row mt-5">
            <div className="col-lg-10 offset-lg-1">
              <div className="row border ">
                <h2 className=" mt-4" style={{ fontSize: "18px", fontWeight: "700" }}>Personal Information</h2>
                <hr className="mt-3 text-secondary" />
                <div className="d-flex justify-content-between">

                  <div className="">
                    <img src="https://chandpropertiesllc.com/assets/images/no-image.jpg" className="img-fluid rounded-pill" alt="" />
                  </div>
                  <div className="mt-4">

                    <button className="btn btn-danger border-0 rounded-0">Delete My Account</button>


                  </div>
                </div>

                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    First Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control p-2"
                    id="inputPassword "
                    placeholder="First Name:"
                  />
                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Last Name:{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control  p-2"
                    id="Test_DatetimeLocal"
                    placeholder="Last Name:"
                  />
                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Email:{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control  p-2"
                    id="Test_DatetimeLocal"
                    placeholder="Email:"
                  />
                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Contact Number:{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control  p-2"
                    id="Test_DatetimeLocal"
                    placeholder="Contact Number:"

                  />
                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Date of Birth:{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control p-2"
                    id="Test_DatetimeLocal"
                    placeholder="Date of Birth:"
                  />
                </div>
                <div
                  className="col-sm-12 col-md-6 mb-4 mt-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    NID Number:{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    id="Test_DatetimeLocal" placeholder="NID Number"
                  />
                </div>


              </div>




            </div>
          </div>
        </div>


        <div className="container-fluid mb-5 ">
          <div className="row mt-5">
            <div className="col-lg-10 offset-lg-1">
              <div className="row border ">
                <h2 className=" mt-4" style={{ fontSize: "18px", fontWeight: "700" }}>Previous Address</h2>
                <hr className="mt-3 text-secondary" />




                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Address:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control p-2"
                    id="inputPassword "
                    placeholder="First Name:"
                  />
                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Country:{" "}
                  </label>
                  <br />
                  <select className="form-select flex-shrink-0  p-2" id="search_property">
                    <option value="" selected>
                      Property
                    </option>
                    <option value="hotel">hotel</option>
                    <option value="hotel">hotel</option>
                    <option value="ssss">ssss</option>
                  </select>

                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    State:{" "}
                  </label>
                  <br />
                  <select className="form-select flex-shrink-0  p-2" id="search_property">
                    <option value="" selected>
                      Property
                    </option>
                    <option value="hotel">hotel</option>
                    <option value="hotel">hotel</option>
                    <option value="ssss">ssss</option>
                  </select>

                </div>
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    City:{" "}
                  </label>
                  <br />
                  <select className="form-select flex-shrink-0  p-2" id="search_property">
                    <option value="" selected>
                      Property
                    </option>
                    <option value="hotel">hotel</option>
                    <option value="hotel">hotel</option>
                    <option value="ssss">ssss</option>
                  </select>

                </div>

                <div
                  className="col-sm-12 col-md-6 mb-4 mt-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                    Zip Code:{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    id="Test_DatetimeLocal" placeholder="NID Number"
                  />
                </div>


              </div>




            </div>
          </div>
        </div>


        <div className="container-fluid mb-5 ">
          <div className="row mt-5">
            <div className="col-lg-10 offset-lg-1">
              <div className="row border ">
                <h2 className=" mt-4" style={{ fontSize: "18px", fontWeight: "700" }}>Other Infomation</h2>
                <hr className="mt-3 text-secondary" />




                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                  Employment:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control p-2"
                    id="inputPassword "
                    placeholder="First Name:"
                  />
                </div>
               

               
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-1"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                  Family Member:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="form-control p-2"
                    id="inputPassword "
                    placeholder="Seo"
                  />
                </div>
               
               
                <div
                  className="col-sm-12 col-md-6 mt-1 mb-4"
                  style={{ lineHeight: "3rem" }}
                >
                  <label className="fw-bold" htmlFor="specificSizeSelect">
                  Age:
                  </label>
                  <br />
                  <input
                    type="number"
                    className="form-control p-2"
                    id="inputPassword "
                    placeholder="First Name:"
                  />
                </div>
               


              </div>




            </div>
          </div>
        </div>
  

  <div className="container">
    <div className="row">
    
      <div className="col-md-11 mb-5 mt-1">

      <div className="text-end">
          <button className="btn btn-info text-end text-light px-5" style={{fontWeight:"700"}}>Update</button>
        </div>
      </div>
    </div>
  </div>


        {/* form end */}
        </div>
      </>
    </>
  )
}

export default Tenantsprofile
