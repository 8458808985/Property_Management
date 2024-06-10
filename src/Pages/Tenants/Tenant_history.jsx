import React from 'react'

const Tenant_history = () => {
  return (
   <>
  <>
  <div className='w-100'>

    {/* section start */}
    <div className="container">
     <nav aria-label="breadcrumb" className="float-md-end">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
         
          <li className="breadcrumb-item active" aria-current="page">
          Tenants History
          </li>
        </ol>
      </nav>
    </div>
      
  <div className="container my-5">
    <div className="row">
      <div className="col-md-6">
        <h5 className="my-2">Tenants History</h5>
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
            <div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead style={{ color: "white", backgroundColor: "#4634ff" , whiteSpace:"nowrap"}}>
                  <tr>
                    <th className="py-3">SL</th>
                    <th className="py-3">Name</th>
                    <th className="py-3">Property</th>
                    <th className="py-3">Unit</th>
                    <th className="py-3">General Rent</th>
                    <th className="py-3 ">Status</th>
                    <th className="py-3">Action</th>
                  </tr>
                </thead>
                <tbody style={{whiteSpace:"nowrap"}}>
                  <tr>
                    <td className="py-2">1</td>
                    <td className="py-2">
                      <span style={{ fontWeight: 600 }} className="text-secondary"> lalit Singh </span>
                    </td>
                    <td className="py-2">
                      <span style={{ fontWeight: 600 }} className="text-secondary">hotel </span>
                    </td>
                    <td className="py-2">
                      <span style={{ fontWeight: 600 }} className="text-secondary">  asdf </span>
                    </td>      
                    <td className="py-2">
                      <span style={{ fontWeight: 600 }} className="text-secondary">  101.00 </span>
                    </td>   
                    <td className="py-2">
                      <span style={{ fontWeight: 600 }} className="text-secondary"> Draft </span>
                    </td>     
                    <td className="py-2">
                      <span style={{ fontWeight: 600 }} className="text-secondary"> <i class="fa-solid fa-eye-slash"></i> </span>
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
  </div>
  {/* section end */}
   </>
   
   </>
  )
}

export default Tenant_history
