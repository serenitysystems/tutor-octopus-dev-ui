import { Link, useNavigate } from "react-router-dom";
import StudentInfo from "../../StudentPanel/StudentInfo";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const StudentSideNavBar = ({ sideBarOptions }) => {

  const [showModalLogout, setShowModalLogout] = useState(false);
  const navigate=useNavigate();
  const handleLogout = () => {
    setShowModalLogout(true);
  };

  const handleClose = () => {
    setShowModalLogout(false);
  };

  const handleConfirmLogout = () => {
    // Handle logout here
    setShowModalLogout(false);
    sessionStorage.clear();
    navigate("/Login_Role");
  };
  return (
    <div className="sidebar">
      
      <StudentInfo />
      {sideBarOptions && (
        <ul class="nav flex-column gap-2 text-white">
          {sideBarOptions.map((item, index) =>
            item.name === "Logout" ? (
              <li className="nav-item">
                <button onClick={handleLogout} className="navlinkjh nav-link">
                  <img src={item.image} className="logoimgy1 " />
                  Log-Out
                </button>
              </li>
            ) : (
              <li key={index} className="nav-item">
                <Link to={item.route} className="navlinkjh nav-link">
                  <img src={item.image} className="logoimgy1" alt={item.name} />
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      )}


        {/* <div  className='toggle-navbar'>
        {sideBarOptions && (
        <ul class="nav flex-column gap-2 text-white">
          {sideBarOptions.map((item, index) =>
            item.name === "Logout" ? (
              <li className="nav-item">
                <button onClick={handleLogout} className="navlinkjh nav-link">
                  <img src={item.image} className="logoimgy1 " />
                  Log-Out
                </button>
              </li>
            ) : (
              <li key={index} className="nav-item">
                <Link to={item.route} className="navlinkjh nav-link">
                  <img src={item.image} className="logoimgy1" alt={item.name} />
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
          

        </div> */}

     

      <Modal show={showModalLogout} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmLogout}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentSideNavBar;
