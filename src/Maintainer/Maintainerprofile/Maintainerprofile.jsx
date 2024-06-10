
const Maintainerprofile = () => {
  return (
   <>
    <>
    <div className="w-100">
    <div className="container">
     <nav aria-label="breadcrumb" className="float-md-end">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Profile</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           My Profile
          </li>
        </ol>
      </nav>
    </div>
      

      {/* form start */}
      <div className="container-fluid mb-5 ">
        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <div className="row border">
              <h2 className="text-center mt-4">My Profile</h2>
              <div
                className="col-sm-12 col-md-6"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  First Name:
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword "
                  placeholder="#INVO00035"
                />
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  Last Name:{" "}
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="Test_DatetimeLocal"
                />
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  Email:{" "}
                </label>
                <br />
                <input
                  type="email"
                  className="form-control"
                  id="Test_DatetimeLocal"
                />
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  Contact Number:{" "}
                </label>
                <br />
                <input
                  type="email"
                  className="form-control"
                  id="Test_DatetimeLocal"
                />
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  Date of Birth:{" "}
                </label>
                <br />
                <input
                  type="email"
                  className="form-control"
                  id="Test_DatetimeLocal"
                />
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  Company Name:{" "}
                </label>
                <br />
                <input
                  type="email"
                  className="form-control"
                  id="Test_DatetimeLocal"
                />
              </div>
              <div
                className="col-sm-12 col-md-12"
                style={{ lineHeight: "3rem" }}
              >
                <label className="" htmlFor="specificSizeSelect">
                  File:{" "}
                </label>
                <br />
                <input
                  type="file"
                  className="form-control"
                  id="Test_DatetimeLocal"
                />
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                <button
                  className="btn btn-primary me-md-end  mt-5 py-2"
                  type="button"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* form end */}
    </>
   </>
  )
}

export default Maintainerprofile
