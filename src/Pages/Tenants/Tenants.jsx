import React from 'react'

const Tenants = () => {
  return (
    <>
<div className="container my-5">
  <div className="row">
    <div className="col-md-4">
      <h5 className="my-2">Tenants</h5>
    </div>
    <div className="col-md-3 offset-md-3">

    </div>
    <div className="col-md-2 my-2">
      <a href="add_tenants" className="btn addNewBtn">
        <i className="fa-light fa-plus" /> Add Tenants
      </a>
    </div>
  </div>
  {/* Start Table */}
  <div className="row">
    <div className="col-md-6 my-3">
      <div className="card border-0 shadow-lg rounded-3 ">
        <div className="card-body">
<div style={{display:"flex", justifyContent:"space-between"}}>
    <div>
        

    <div className="flex-grow-1 ms-3">
              <h4 className="mb-1">Lalit Singh</h4>
              <p className="font-13 text-break">tenant@gmail.com</p>
            </div>
    </div>
    <div>
    <i class="fa-solid fa-pen-to-square"></i>
    </div>
</div>
<div className="row">
    <div className="col-md-12 my-3">
      <div className="card border-0 shadow-lg rounded-3 ">
        <div className="card-body">
        <div className="tenants-item-info bg-white radius-4 theme-border">
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading mb-3">
                    Contact No.
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end mb-3">
                    <i className="ri-phone-fill me-2" />
                    <a href="tel:09752100980">09752100980</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center my-3">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Property
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    hotel
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center my-3">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Unit
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    asdf
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center my-3">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Last Rent Paid
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">N/A</div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center my-3">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Current Rent
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    101.00
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center my-3">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Previous Due
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    <span className="bg-red-transparent radius-4 px-2 py-1 red-color">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom-0 tenants-item-info-box">
              <div className="row align-items-center mt-3">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Status
                  </div>
                </div>
                <div className="col-md-7 ">
                  <div className="tenants-info-right font-13 text-end mt-3">
                    <span className="bg-blue-transparent radius-4 px-2 py-1 blue-color">
                      Draft
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
   <div className="col-md-12 text-end">


        <button className='btn btn-success mt-5'> View Details </button>
   </div>
        </div>
        </div>
        </div>
            </div>

        {/* <div className="row">
    <div className="single-tenant property-1 up-1-1 col-md-6 col-lg-6 col-xl-6 col-xxl-3 d-none">
      <div className="property-item tenants-item bg-off-white theme-border radius-10 mb-25">
        <div className="property-item-content tenants-item-content p-20">
          <div className="property-item-address tenants-img-info-box d-flex align-items-center mb-20">
            <div className="flex-shrink-0 font-13">
              <div
                className="tenant-img bg-img-property radius-4"
                style={{
                  backgroundImage:
                    "url(https://chandpropertiesllc.com/assets/images/no-image.jpg)"
                }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h4 className="mb-1">Lalit Singh</h4>
              <p className="font-13 text-break">tenant@gmail.com</p>
            </div>
            <a
              href="https://chandpropertiesllc.com/owner/tenant/edit/1"
              className="p-1 tbl-action-btn"
              title="Edit"
            >
              <span
                className="iconify"
                data-icon="material-symbols:edit-square-outline"
              />
            </a>
          </div>
          <div className="tenants-item-info bg-white radius-4 theme-border">
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Contact No.
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    <i className="ri-phone-fill me-2" />
                    <a href="tel:09752100980">09752100980</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Property
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    hotel
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Unit
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    asdf
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Last Rent Paid
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">N/A</div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Current Rent
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    101.00
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Previous Due
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    <span className="bg-red-transparent radius-4 px-2 py-1 red-color">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom-0 tenants-item-info-box">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="tenants-info-left font-13 color-heading">
                    Status
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tenants-info-right font-13 text-end">
                    <span className="bg-blue-transparent radius-4 px-2 py-1 blue-color">
                      Draft
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://chandpropertiesllc.com/owner/tenant/details/1?tab=profile"
            className="theme-btn mt-20 w-100"
            title="View Details"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  </div> */}



            

        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Tenants
