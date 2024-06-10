import React from 'react'

const AddTenants = () => {
  return (
    <>
    {/* section start */}
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <h5 className="font-weight mt-2">Add New Tenants</h5>
        </div>
        <div className="col-md-2 offset-md-4">
          <a href="tenants" className="btn btn-sm addNewBtn mt-2 px-3">
            <i className="fa-light fa-arrow-turn-left" /> Back
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
            <div className="row">
            <div className="col-md-12">
           
         
                <b className="ms-2 fs-5">Personal Information</b>
            
            </div>
          </div>
          <hr  style={{color:"gray"}}/>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                First Name<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                Last Name<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Contact Number<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Job <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Job "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Age  <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Age  "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Email   <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Email   "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Password    <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Password    "
                />
              </div>
            </div>
          </div>
         
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
            <div className="row">
            <div className="col-md-12">
           
         
                <b className="ms-2 fs-5">Permanent Address</b>
            
            </div>
          </div>
          <hr  style={{color:"gray"}}/>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                Address <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Address "
                />
              </div>
            </div>
           
            
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Country <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Country "
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                State <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="State "
                />
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                City <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="City "
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Zip Code <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Zip Code "
                />
              </div>
            </div>
          </div>
         
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
            <div className="row">
            <div className="col-md-12">
           
         
                <b className="ms-2 fs-5">Home Details</b>
            
            </div>
          </div>
          <hr  style={{color:"gray"}}/>
          <div className="row mt-5">
          <div className="col-md-6">
              <div className="mb-2 ">
                <label htmlFor="" className="form-label">
                Property <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <select className="form-select" aria-label="Default select example">
  <option selected="">Unit Name</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

              </div>
            </div>
           
            
            <div className="col-md-6">
              <div className="mb-2 ">
                <label htmlFor="" className="form-label">
                Unit Name <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <select className="form-select" aria-label="Default select example">
  <option selected="">Unit Name</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>

              </div>
            </div>
           
           
          </div>
         
            </div>
          </div>
        </div>
      </div>


      {/* Rent Information */}
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
            <div className="row">
            <div className="col-md-12">
           
         
                <b className="ms-2 fs-5">Rent Information</b>
            
            </div>
          </div>
          <hr  style={{color:"gray"}}/>
          <div className="row mt-5">
           
           
            
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                General Rent <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                //   placeholder="Country "
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Security Deposit <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <div className="input-group mb-3">
  <button
    className="btn btn-outline-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Fixed
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Fixed
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Percentage
      </a>
    </li>
   
  </ul>
  <input
    type="number"
    className="form-control"
    aria-label="Text input with dropdown button"
  />
</div>

              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Late Fee<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <div className="input-group mb-3">
  <button
    className="btn btn-outline-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Fixed
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Fixed
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Percentage
      </a>
    </li>
   
  </ul>
  <input
    type="number"
    className="form-control"
    aria-label="Text input with dropdown button"
  />
</div>

              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Incident Receipt<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Zip Code "
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2 mt-3">
                <label htmlFor="" className="form-label">
                Payment due on date <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="number"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Zip Code "
                />
              </div>
            </div>
          </div>
         
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
            <div className="row">
            <div className="col-md-12">
           
         
                <b className="ms-2 fs-5">Personal Documents</b>
            
            </div>
          </div>
          <hr  style={{color:"gray"}}/>
          <div className="row mt-5">
        <div className="col-md-12">
            <label htmlFor="">Upload Documents</label>
                <input type="file" className='w-100 mt-5 border'/>
        </div>
          
          </div>
         
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
           
        <div style={{display:"flex", justifyContent:"center"}}>
<button type="button" class="btn btn-danger btn-lg ">Cancel</button>
        <button type="button" class="btn btn-primary btn-lg ms-3">Submit</button>
        </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* section end */}
  </>
  
  )
}

export default AddTenants
