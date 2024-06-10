import React from 'react'

const Tenantdocument = () => {
    return (
        <>
        <div className='w-100'>
            {/* section start */}
            <div className="container">
            <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb d-flex justify-content-between">
          <div >
          <li  style={{fontWeight:"600", fontSize:"18px"}}> Document</li>
         
          </div>
        <div className="d-flex justify-content-between">
        <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Document
          </li>
        </div>
          
        </ol>
      </nav>
            </div>
            <hr />
            {/* section End  */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <button className='btn btn-primary border-0 rounded-0 shadow px-4 ' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ fontWeight: "600" }}>Document</button>
                    </div>
                    <div className="col-md-3 offset-md-3">
                        <div className="input-group my-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username/Email"
                            />
                            <button className="btn searchBtn px-3">
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                    </div>
                </div>
             


                {/* Start Table */}
                <div className="row">
                    <div className="col-md-12 my-3">
                        <div className="card border-0 shadow-lg rounded-3">
                            <div className="card-body">
                                <h2 style={{fontSize:"14px", fontWeight:"700"}}>All Document</h2>
                                <hr />
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead style={{ color: "white", backgroundColor: "#4634ff", whiteSpace: "nowrap" }}>
                                            <tr>
                                                <th className="py-3">SL</th>
                                                <th className="py-3">Issue</th>
                                                <th className="py-3">Details</th>
                                                <th className="py-3 ">Status</th>
                                                <th className="py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ whiteSpace: "nowrap" }}>
                                            <tr>
                                                <td className="py-2">1</td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary">  22/2/2020 </span>
                                                </td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary"> Ankit@gmail.com </span>
                                                </td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary">  Active </span>
                                                </td>

                                                <td className="py-2">
                                                    <a className="btn addNewBtn btn-sm px-3 m-1">
                                                        <i className="fa-light fa-desktop" /> Details
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">1</td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary">  22/2/2020 </span>
                                                </td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary"> Ankit@gmail.com </span>
                                                </td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary">  Active </span>
                                                </td>

                                                <td className="py-2">
                                                    <a className="btn addNewBtn btn-sm px-3 m-1">
                                                        <i className="fa-light fa-desktop" /> Details
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">1</td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary">  22/2/2020 </span>
                                                </td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary"> Ankit@gmail.com </span>
                                                </td>
                                                <td className="py-2">
                                                    <span style={{ fontWeight: 600 }} className="text-secondary">  Active </span>
                                                </td>

                                                <td className="py-2">
                                                    <a className="btn addNewBtn btn-sm px-3 m-1">
                                                        <i className="fa-light fa-desktop" /> Details
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
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



            {/* start model  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Files</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected="">--select confg--</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label mt-2 mb-2">
                                            Front Side
                                            </label>
                                            <input className="form-control" type="file" id="formFile" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary bg-transparent text-dark" data-bs-dismiss="modal">Back</button>
                            <button type="button" class="btn btn-primary border-0 rounded-0">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Model  */}
            </div>
        </>
    )
}

export default Tenantdocument