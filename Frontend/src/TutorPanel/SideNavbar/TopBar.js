import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { CiShare2 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./Topbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteQuiz } from "../../apicalls/Questions";
import { toast } from "react-toastify";
import ConfirmationModal from "../../Components/ConfirmationModal";
import { useSelector } from "react-redux";
import { quizesData } from "../../redux/quizslice";
// import Top from './Top'
// import Home from '../Home'

const TopBar = ({ userData }) => {
  // console.log(sessionStorage.getItem('firstName').charAt[0])
  // console.log(sessionStorage.getItem('lastName')).charAt(0);

  // const location=useLocation().pathname;
  let profilename =
    sessionStorage.getItem("firstName").charAt(0) +
    sessionStorage.getItem("lastName").charAt(0);

  //PANKAJ--->PAN---(0,3)
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!sessionStorage.getItem('token')){
  //     alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
  //     console.log("check")
  //     navigate('/Login')
  //     console.log("check")

  //   }

  // },[])

  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const [showModal, setShowModal] = useState(false);
  const data = useSelector(quizesData);

  const handleDeleteClick = async () => {
    const quizId = location.pathname.split("/")[2];
    const payload = { userId, quizId };
    console.log(payload);
    const response = await deleteQuiz(payload);
    console.log(response);
    if (response.success === true) {
      toast.success(response.message);
      navigate("/Quiz"); //CHECK WHY THIS IS NOT WORKING
    } else {
      toast.info(response.message);
      setShowModal(true);
    }
  };

  const handleModalClick = async (value) => {
    if (value === "yes") {
      const quizId = location.pathname.split("/")[2];
      const payload = { userId, quizId };
      console.log(payload);
      const response = await deleteQuiz(payload);
      console.log(response);
      if (response.success === true) {
        toast.success(response.message);
        navigate("/Quiz");
      } else {
        toast.info(response.message);
      }
    } else {
      setShowModal(false);
    }
  };

  return (
    <div>
      <Navbar className="bg-body-tertiaryb desktop1">
        <Container>
          <Navbar.Brand className="subscrip d-flex align-items-center">
            {!location.pathname.includes("/Quiz/") &&
              location.pathname.slice(1)}
            {location.pathname.includes("/Quiz/") && (
              <div className="d-flex align-items-center">
                <span>
                  {location.pathname.split("/")[1]}/{data?.activeQuiz?.subject}
                </span>
                <Button
                  variant="link"
                  className="ms-2"
                  onClick={handleDeleteClick}
                >
                  <img
                    src="/img/delete.svg"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </Button>
              </div>
            )}
          </Navbar.Brand>
          {/* <Home /> */}

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <CiShare2 className="share1" />{" "}
              <IoIosNotificationsOutline className="share1" />
              {/* <Link to='/Profile'><span className='tst'>{userData.firstName[0]+userData.lastName[0]}</span></Link> */}
              <Link
                to={location.pathname === "/Profile" ? "/Home" : "/Profile"}
              >
                <span className="tst">{profilename}</span>
              </Link>
            </Navbar.Text>

            <Link to="/Subscription" className="Subscribe">
              Subscribe{" "}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal && <ConfirmationModal handleModalClick={handleModalClick} />}
    </div>
  );
};

export default TopBar;
