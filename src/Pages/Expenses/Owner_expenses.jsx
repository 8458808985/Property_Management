import React from 'react'

const Owner_expenses = () => {
  return (
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
         Expenses   
          </li>
        </ol>
      </nav>
    </div>
      
  <div className="container my-5">
    <div className="row">
      <div className="col-md-6">
        <h5 className="my-2">All Expenses</h5>
      </div>
      <div className="col-md-3 offset-md-3">
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

    <hr />

    <div className="row">
            <div class="col-md-3     mb-25">
         
            </div>
<div className="col-md-9 text-end">
<button className="btn btn-primary mb-25 p-2 me-4 " style={{color:"white"}}   type="button" 
    data-bs-toggle="modal"
    data-bs-target="#exampleModal">Add New Expenses</button>

</div>

          </div>
    {/* Start Table */}
    <div className="row">
      <div className="col-md-12 my-3">
        <div className="card border-0 shadow-lg rounded-3">
          <div className="card-body">
            <div className="table-responsive">
            <div class="billing-center-area bg-off-white theme-border radius-4 p-25">
                            <table id="expensesDatatable" class="table responsive theme-border p-20 ">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Property</th>
                                        <th>Expenses Type</th>
                                        <th>Responsibility</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
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
          New Invoice
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <div className="modal-inner-form-box  theme-border radius-4   pb-0">
          <div className="row ">
            <div className="col-md-12 my-3">
              <label className="label-text-title color-heading font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder='Name'
                className="form-control p-3"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="label-text-title color-heading font-medium mb-2">
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
            <div className="col-md-12 my-3">
              <label className="label-text-title color-heading font-medium mb-2">
              Expense Type
              </label>
              <select className="form-select flex-shrink-0 p-3" name="month">
                <option value="">--Select Month--</option>

              </select>
            </div>
<div className="col-md-12 my-3">
    <label htmlFor="">Description</label>
<textarea name="" id="" className='form-control mt-2 p-3'></textarea>

</div>

            <div className="col-md-6 my-3 mb-2">
              <label className="label-text-title color-heading font-medium mb-2">
                Total Amount
              </label>
              <div className="custom-datepicker">
                <div className="custom-datepicker-inner position-relative">
                  <input
                    type="number"
                    name="due_date"
                    className="datepicker form-control p-3"
                    autoComplete="off"
                    placeholder="Total Amount"
                  />
                  <i className="ri-calendar-2-line" />
                </div>
              </div>
            </div>

            <div className="row">
  <div className="col-auto my-3">
    <label className="label-text-title color-heading font-medium mb-2">
      Responsibilities
    </label>
    <div>
      <div className="form-group custom-checkbox d-inline me-3">
        <input
          type="checkbox"
          defaultValue={1}
          name="responsibilities[0]"
          id="responseTenant"
         />
        <label className="fw-normal ms-2" htmlFor="responseTenant">
          Tenant
        </label>
      </div>
      <div className="form-group custom-checkbox d-inline me-3">
        <input
          type="checkbox"
          defaultValue={2}
          name="responsibilities[1]"
          id="responseOwner"
        />
        <label className="fw-normal ms-2" htmlFor="responseOwner">
          Property Owner
        </label>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-md-12 my-3">
    <label className="label-text-title color-heading font-medium mb-2">
      Upload Documents
    </label>
    <input type="file" name="file" className="form-control p-3" />
  </div>
</div>



          </div>
        </div>
      </div>
      <div className="modal-footer ">
        <button
          type="button"
          className="btn btn-secondary p-3"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary p-3">
          Save Expenses
        </button>
      </div>
    </div>
  </div>
</div>
</div>




   </>
  )
}

export default Owner_expenses
