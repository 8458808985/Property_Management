import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOwner, ShowOwner } from '../../Redux/Features/Adminownerslice';
import Loader from '../../Components/Loader';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminOwner = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isdelete, setIsDelete]= useState(null)
  const [show, setShow] = useState(false);
  const { Adminowner, loading } = useSelector((state) => state.Adminowner);

  useEffect(() => {
    dispatch(ShowOwner());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const Filterowner = search 
    ? Adminowner.filter((owner) =>
        owner.ownerName.toLowerCase().includes(search.toLowerCase()) ||
        owner.email.toLowerCase().includes(search.toLowerCase()) ||
        owner.contact.toLowerCase().includes(search.toLowerCase())
      )
    : Adminowner;


     //delete maintainer

     const DeleteMain=(did)=>{
      setIsDelete(did)
      setShow(true)
     }
     
     const handleClose=()=>{
       setShow(false)
       setIsDelete(null)
     }
     const confirmDelete=(id)=>{
      dispatch(DeleteOwner(id))
      setShow(false)
      toast.error("Owner Delete Successfully !",{
       position:"top-center"
      })
     }
  return (
    <>
    <ToastContainer/>
    <div className='w-100'>
      <div className="container mt-2">
        <nav aria-label="breadcrumb" className="float-md-end">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Owner
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h5 className="my-2">All Owners</h5>
          </div>
          <div className="col-md-3 offset-md-3">
            <div className="input-group my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search...."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn searchBtn px-3">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 my-3">
            <div className="card border-0 shadow-lg rounded-3">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead
                      style={{
                        color: 'white',
                        backgroundColor: '#4634ff',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <tr>
                        <th className="py-3">SL</th>
                        <th className="py-3">Owner Name</th>
                        <th className="py-3">Contact Number</th>
                        <th className="py-3">Email</th>
                        <th className="py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ whiteSpace: 'nowrap' }}>
                      {Filterowner.map((owner, index) => (
                        <tr key={owner.id}>
                          <td className="py-2">{index + 1}</td>
                          <td className="py-2">
                            <span style={{ fontWeight: 600 }} className="text-secondary">
                              {owner.ownerName}
                            </span>
                          </td>
                          <td className="py-2">
                            <span style={{ fontWeight: 600 }} className="text-secondary">
                              {owner.contact}
                            </span>
                          </td>
                          <td className="py-2">
                            <span style={{ fontWeight: 600 }} className="text-secondary">
                              {owner.email}
                            </span>
                          </td>
                          <td className="py-2">
                            <button className="">
                              <i className="fa-solid fa-trash text-danger fs-4" onClick={()=> DeleteMain(owner.id)}></i>              
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row my-4 text-center">
                  <div className="col-md-12 text-center">
                    <nav aria-label="Page navigation example text-center">
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
   {/* Confirm Delete Modal */}
   <Modal
   show={show}
   onHide={handleClose}
   backdrop="static"
   keyboard={false}
 >
   <Modal.Header closeButton>
     <Modal.Title>Delete Owner</Modal.Title>
   </Modal.Header>
   <Modal.Body>Are you sure you want to delete this Owner ?</Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
     <Button variant="danger" onClick={() => confirmDelete(isdelete)}>
       Delete
     </Button>
   </Modal.Footer>
 </Modal>
     </>
  );
};

export default AdminOwner;