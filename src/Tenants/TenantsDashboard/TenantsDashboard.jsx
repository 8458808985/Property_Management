
const TenantsDashboard = () => {
  return (
    
        <>
        <div>
        <div className="container-fluid">
          <h3 className="fw-bold ms-2">Dashboard</h3>
          <p className="ms-2" style={{color:"#737c91"}}>Wel Come back, Mr tenant 🖐</p>
          <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-warning text-xl-left fs-5">
                  <i className="fa-solid fa-house"></i>
                  </p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2" style={{color:"#737c91"}}>
                    tenant
                    </h6>
                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
                  </div>
                  <p className="mb-0 mt-2 text-danger">
                    <span className=" ms-1 fs-2 fw-bold" style={{color:"#160e4d"}}>
                      <small>hotel</small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-info text-xl-left fs-5">
                  <i className="fa-duotone fa-house"></i>
                  </p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2"style={{color:"#737c91"}}>
                    Current Rent
                    </h6>
                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
                  </div>
                  <p className="mb-0 mt-2 text-danger">
                    <span className=" ms-1 fs-2 fw-bold" style={{color:"#160e4d"}}>
                      <small >$ 101.00</small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-warning text-xl-left fs-5">
                  <i className="fa-regular fa-ticket fs-5"></i> 
                  </p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h6 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 mt-2" style={{color:"#737c91"}}>
                    Resolved Ticket
                    </h6>
                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info" />
                  </div>
                  <p className="mb-0 mt-2 text-danger">
                    <span className="text-black ms-1 fs-2 fw-bold" style={{color:"#160e4d"}}>
                      <small>0</small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
         
          </div>
        </div>

        <div className="container">
  <div className="row">
    <div className="col-md-8 col-sm-8 col-12 mt-4">
      <div className="card h-100 mb-3">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between mb-25">
                <h4
                  className="mb-3 mt-1 mx-1"
                  style={{ fontSize: 18, fontWeight: 600, color: "#160e4d" }}
                >
                  Paid Invoice
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table  p-20">
                  <thead className="border-1 mt-3 mb-2">
                    <tr>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Invoice No.
                      </th>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Reference
                      </th>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Issus Date
                      </th>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-4 col-12 mt-4 ">
      <div className="card h-100">
        <div className="card-body">
          <div className="">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-center mb-25">
                  <h4 className="mb-4">Notice Board</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive text-center">
                  No Data Found
                  <table className="table tenant-portal-notice-tbl theme-border p-20">
                    <tbody className="mt-2" />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-8 col-sm-8 col-12 mt-4">
      <div className="card h-100 mb-3">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between mb-25">
                <h4
                  className="mb-3 mt-1 mx-1"
                  style={{ fontSize: 18, fontWeight: 600, color: "#160e4d" }}
                >
                  Unpaid Invoice
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table  p-20">
                  <thead className="border-1 mt-3 mb-2">
                    <tr>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Invoice No.
                      </th>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Reference
                      </th>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Issus Date
                      </th>
                      <th
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#160e4d"
                        }}
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

      </>
      

  )
}

export default TenantsDashboard
