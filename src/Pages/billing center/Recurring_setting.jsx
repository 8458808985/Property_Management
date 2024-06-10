import React from 'react'

const Recurring_setting = () => {
  return (
    <>
   
   <div className='w-100'>

    <div className="container my-3">
      <div className="row">
        <div className="col-md-6">
          <h5 className="my-2">All Invoices</h5>
        </div>
        <div className="col-md-3 offset-md-3">
          <nav aria-label="breadcrumb" className="float-md-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                All Invoices
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <hr />

      <div className="row">
        <div class="col-md-3     mb-25">
          <select class="form-select flex-shrink-0" id="search_property">
            <option value="" selected>
              Select Property
            </option>
            <option value="hotel">hotel</option>
            <option value="hotel">hotel</option>
            <option value="ssss">ssss</option>
          </select>
        </div>
<div className="col-md-9 text-end">
<button className="btn btn-primary mb-25 p-2 me-4 " style={{color:"white"}}   type="button" 
data-bs-toggle="modal"
data-bs-target="#exampleModal">New Recurring Setting</button>

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


      {/* <div className="billing-center-area bg-off-white theme-border radius-4 p-25">
<div className="tbl-tab-wrap border-bottom pb-25 mb-25">
  <ul
    className="nav nav-tabs billing-center-nav-tabs"
    id="myTab"
    role="tablist"
  >
    <li className="nav-item" role="presentation " style={{color:"black"}}>
      <button
        className="nav-link active"
        id="table1-tab"
        data-bs-toggle="tab"
        data-bs-target="#table1-tab-pane"
        type="button"
        role="tab"
        aria-controls="table1-tab-pane"
        aria-selected="true"
      >
        All (0)
      </button>
    </li>
    <li className="nav-item" role="presentation" style={{color:"black"}}>
      <button
        className="nav-link"
        id="table2-tab"
        data-bs-toggle="tab"
        data-bs-target="#table2-tab-pane"
        type="button"
        role="tab"
        aria-controls="table2-tab-pane"
        aria-selected="false"
      >
        Paid (0)
      </button>
    </li>
    <li className="nav-item" role="presentation" style={{color:"black"}}>
      <button
        className="nav-link"
        id="table3-tab"
        data-bs-toggle="tab"
        data-bs-target="#table3-tab-pane"
        type="button"
        role="tab"
        aria-controls="table3-tab-pane"
        aria-selected="false"
      >
        Pending (0)
      </button>
    </li> 
    <li className="nav-item" role="presentation" style={{color:"black"}}>
      <button
        className="nav-link"
        id="tableBank-tab"
        data-bs-toggle="tab"
        data-bs-target="#tableBank-tab-pane"
        type="button"
        role="tab"
        aria-controls="tableBank-tab-pane"
        aria-selected="false"
      >
        Bank Pending (0)
      </button>
    </li>
  </ul>
</div>

</div> */}


      <div className="row ">
        <div className="col-md-9"></div>
 <div className="col-md-3 text-end">
   <div className="input-group my-2 border">
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
            <thead style={{ color: "white", backgroundColor: "#4634ff" , whiteSpace:"nowrap"}}>
              <tr>
                <th className="py-3">SL</th>
                <th className="py-3">Invoice</th>
                <th className="py-3">Property	</th>
                <th className="py-3 ">Due Date	</th>
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
          New Recurring
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow my-3">
            <div className="card-body rounded-3">
            <div className="modal-inner-form-box  theme-border radius-4   pb-0">
          <div className="row bg-reset">
            <div className="col-md-12 my-3">
              <label className="label-text-title color-heading font-medium mb-2">
                Invoice Prefix
              </label>
              <input
                type="text"
                name="name"
                defaultValue="INV"
                className="form-control p-3"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="label-text-title color-heading font-medium mb-2 ">
                Property
              </label>
              <select
                className="form-select flex-shrink-0 property_id p-3"
                name="property_id"
              >
                <option value="">--Select Property--</option>
                <option value={1}>hotel</option>
                <option value={2}>hotel</option>
                <option value={3}>ssss</option>
              </select>
            </div>
            <div className="col-md-6 my-3">
              <label className="label-text-title color-heading font-medium mb-2">
                Unit
              </label>
              <select
                className="form-select flex-shrink-0 propertyUnitSelectOption p-3"
                name="property_unit_id"
              >
                <option value="">--Select Unit--</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <label className="label-text-title color-heading font-medium mb-2">
              Recurring Type
              </label>
              <select className="form-select flex-shrink-0 p-3" name="month">
                <option value="">Monthly</option>
                <option value="January">Yearly</option>
                <option value="February">Custom</option>
               
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label className="label-text-title color-heading font-medium mb-2">
              Status
              </label>
              <select className="form-select flex-shrink-0 p-3" name="month">
                <option value="">Active</option>
                <option value="January">Deactive</option>
               
              </select>
            </div>
            <div className="col-md-6 my-5 mb-5">
              <label className="label-text-title color-heading font-medium mb-2">
              Due Date After Invoice Creation
              </label>
              <div className="custom-datepicker">
                <div className="custom-datepicker-inner position-relative">
                  <input
                    type="number"
                    name="due_date"
                    className="datepicker form-control p-3"
                    autoComplete="off"
                    placeholder="Due Date"
                  />
                  <i className="ri-calendar-2-line" />
                </div>
              </div>
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
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
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

export default Recurring_setting
