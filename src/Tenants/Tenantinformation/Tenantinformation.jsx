
const Tenantinformation = () => {
  return (
    <>
    <div className="container-filud w-100">
      <div className="card border-0 shadow ">
        <div className="card-body">
        <div className="container">
            <nav aria-label="breadcrumb" className="">
        <ol className="breadcrumb d-flex justify-content-between">
          <div >
          <li  style={{fontWeight:"600", fontSize:"18px"}}> Invoices</li>
         
          </div>
        <div className="d-flex justify-content-between">
        <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Invoices
          </li>
        </div>
          
        </ol>
      </nav>
            </div> 
            <hr />
          <div className="d-flex justify-content-center align-items-center mt-5 flex-column mb-5">
            <img
              src="https://chandpropertiesllc.com/assets/images/empty-img.png"
              className="img-fluid mt-4"
              alt=""
            />
            <h2
              style={{ color: "rgb(16, 16, 82)", fontWeight: 600, fontSize: 22 }}
              className="mt-3 mb-3"
            >
              Empty Information
            </h2>
            <button
              className="btn btn-primary px-4 py-2"
              style={{ fontWeight: 700 }}
            >
              My Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* start model  */}
    {/* Modal */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="exampleModalLabel"
              style={{ color: "rgb(31, 31, 88)", fontWeight: 500 }}
            >
              Create Ticket
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                      style={{ color: "rgb(31, 31, 88)", fontWeight: 500 }}
                    >
                      Title *
                    </label>
                    <input
                      type="text "
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Title"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <label
                    htmlFor=""
                    className="mx-2 mb-1 mt-1"
                    style={{ color: "rgb(31, 31, 88)", fontWeight: 500 }}
                  >
                    Details *<span />{" "}
                  </label>
                  <div className="form-floating mb-2">
                    <textarea
                      className="form-control mt-2 mb-2"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea2">Details</label>
                  </div>
                  <label
                    htmlFor=""
                    className="mt-2 mb-2"
                    style={{ color: "rgb(31, 31, 88)", fontWeight: 500 }}
                  >
                    Topic <span>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <div className="mt-3 mb-3">
                    <label
                      htmlFor=""
                      className="mt-2 mb-2"
                      style={{ color: "rgb(31, 31, 88)", fontWeight: 500 }}
                    >
                      Attachments *
                    </label>{" "}
                    <br />
                    <input
                      type="file"
                      className="border-0"
                      id="myfile"
                      name="myfile"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn  bg-transparent shadow">
              Back{" "}
            </button>
            <button type="submit" className="btn btn-primary">
              Create Ticket{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* End model  */}
  </>
  
  )
}

export default Tenantinformation