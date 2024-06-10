import React from 'react'

const Owner_maintanance_request = () => {
  return (
    <>

      <div className='w-100'>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-6">
              <h5 className="my-2">All Maintenance</h5>
            </div>
            <div className="col-md-3 offset-md-3">
              <nav aria-label="breadcrumb" className="float-md-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    Maintenance
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <hr />

          <div className="row">
            <div class="col-md-3">
              <select class="form-select flex-shrink-0  p-3" id="search_property">
                <option value="" selected>
                  Select Property
                </option>
                <option value="hotel">hotel</option>
                <option value="hotel">hotel</option>
                <option value="ssss">ssss</option>
              </select>
            </div>
            <div className="col-md-9 text-end  ">
              <button className="btn btn-primary mb-25 p-2 me-4  p-3 " style={{ color: "white" }} type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">Add Maintenance Request</button>

            </div>

          </div>
          {/* Start Table */}

        </div>




        {/* section start */}


        <div className="container my-1">
          {/* Start Table */}
          <div className="row">
            <div className="col-md-12 my-3">
              <div className="card border-0 shadow-lg rounded-3">
                <div className="card-body">




                  <div className="row ">
                    <div className="col-md-9"></div>
                    <div className="col-md-3 text-end">
                      <div className="input-group my-2 border ">
                        <input
                          type="text"
                          className="form-control p-3"
                          placeholder="Username/Email"
                        />
                        <button className="btn searchBtn px-3">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-hover table-striped">
                      <thead style={{ color: "white", backgroundColor: "#4634ff", whiteSpace: "nowrap" }}>
                        <tr>
                          <th className="py-3">SL</th>
                          <th className="py-3">Property</th>
                          <th className="py-3">Unit Name	</th>
                          <th className="py-3 ">Issue Name</th>
                          <th className="py-3">Details</th>
                          <th className="py-3">Status</th>
                          <th className="py-3">Action</th>
                        </tr>
                      </thead>

                    </table>
                  </div>
                  {/* End Table */}
                  {/* Start Pagination */}
                  <div className="row my-4">
                    <div className="col-md-4">
                      <span className="text-secondary">
                        Showing 1 to 20 of 777 results
                      </span>
                    </div>
                    <div className="col-md-8">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section end */}


        {/* modal */}


        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg"> {/* Change modal-dialog to modal-lg */}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Maintenance Request
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row my-3">
                  <div className="col-md-6">
                    <label htmlFor="" className='my-3'>Select Property <span style={{ color: "red" }}>*</span></label>
                    <select class="form-select flex-shrink-0  p-3" id="search_property">
                      <option value="" selected>
                        Property
                      </option>
                      <option value="hotel">hotel</option>
                      <option value="hotel">hotel</option>
                      <option value="ssss">ssss</option>
                    </select>


                  </div>

                  <div className="col-md-6">
                    <label htmlFor="" className='my-3'>Select Unit <span style={{ color: "red" }}>*</span></label>
                    <select class="form-select flex-shrink-0  p-3" id="search_property">
                      <option value="" selected>
                        Select Unit
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='my-3'> Issue <span style={{ color: "red" }}>*</span></label>
                    <select class="form-select flex-shrink-0  p-3" id="search_property">
                      <option value="" selected>
                        Select Issue
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='my-3'> Issue <span style={{ color: "red" }}>*</span></label>
                    <select class="form-select flex-shrink-0  p-3" id="search_property">
                      <option value="" selected>
                        Complete
                      </option>
                      <option value="" selected>
                        Pending
                      </option>
                      <option value="" selected>
                        In Progress
                      </option>
                    </select>
                  </div>
                </div>


                <div className="row">
                  <div className="col-md-12">
                    <div className="card border-0 shadow my-3">
                      <div className="card-body rounded-3">
                        <div className="modal-inner-form-box  theme-border radius-4   pb-0">
                          <div className="row bg-reset">



                            <div className="col-md-12 my-3">
                              <label className="label-text-title color-heading font-medium mb-2">
                                Details <span style={{ color: "red" }}>*</span>
                              </label>
                              <textarea
                                type="text"
                                name="name"
                                className="form-control p-3"
                                placeholder='Details'
                              />
                            </div>
                            <div className="col-md-12 my-3">
                              <label className="label-text-title color-heading font-medium mb-2">
                                Attach<span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="file"
                                name="name"
                                className="form-control p-3"
                                placeholder='Contact Number'
                              />
                            </div>


                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary p-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary p-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>






      </div>

    </>
  )
}

export default Owner_maintanance_request
