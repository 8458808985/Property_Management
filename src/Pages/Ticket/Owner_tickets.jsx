import React from 'react'

const Owner_tickets = () => {
  return (
    <>
   <div className='w-100'>

  <div className="container-filud">
    <div className="card border-0 shadow  ">
      <div className="card-body">
      <div className="row">
            <div className="col-md-6">
              <h5 className="my-2">Tickets</h5>
            </div>
            <div className="col-md-3 offset-md-3">
              <nav aria-label="breadcrumb" className="float-md-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                  Tickets
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <hr />
  
        <div className="d-flex justify-content-center align-items-center mt-5 flex-column mb-5 "   >
          <img
            src="https://chandpropertiesllc.com/assets/images/empty-img.png"
            className="img-fluid mt-5"
         
            alt=""
          />
          <h2
            style={{ color: "rgb(16, 16, 82)", fontWeight: 600, fontSize: 22 }}
            className="mt-3 mb-3"
          >
            Empty 
          </h2>
        
        </div>
      </div>
    </div>
  </div>
  </div>
 
</>

  )
}

export default Owner_tickets
