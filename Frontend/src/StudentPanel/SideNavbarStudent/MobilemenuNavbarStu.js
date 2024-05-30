import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const MobilemenuNavbarStu = ({ sideBarOptions }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showModalLogout, setShowModalLogout] = useState(false);
  const [navState, setNavState] = useState(false);

  const handleLogout = () => {
    setShowModalLogout(true);
  };

  const handleClose = () => {
    setShowModalLogout(false);
  };

  const handleConfirmLogout = () => {
    // Handle logout here
    setShowModalLogout(false);
    sessionStorage.removeItem("token");
    navigate("/Login");
    setNavState(false); // Ensure navbar collapses after logout
  };

  const navigateToLink = (path) => {
    setNavState(false); // Collapse the navbar
    navigate(path);
  };

  return (
    <div>
      <div className="desktop13">
        <nav className="navbar navbar-expand-lg navbar-light bg-light debhh fixed-top d-block">
          <button
            onClick={() => setNavState(!navState)}
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {
            navState && 
            <div>
              <ul className="navbar-nav">
                {sideBarOptions.map((item, index) =>
                  item.name === "Logout" ? (
                    <li className="nav-item" key={index}>
                      <button onClick={handleLogout} className="nav-link nav-link1">
                        Log-Out
                      </button>
                    </li>
                  ) : (
                    <li className="nav-item" key={index}>
                      <button onClick={() => navigateToLink(item.route)} className="nav-link nav-link1">
                        {item.name}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          }
        </nav>
      </div>
      <Modal show={showModalLogout} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MobilemenuNavbarStu;
