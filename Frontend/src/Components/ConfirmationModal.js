import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { quizesData } from "../redux/quizslice";

const ConfirmationModal = ({ handleModalClick, quizName }) => {
  const data = useSelector(quizesData);

  return (
    <>
      <Modal show={true} onHide={() => handleModalClick("no")}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the quiz: "{data?.activeQuiz?.subject}
          "?
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-theme-secondary"
            onClick={() => handleModalClick("no")}
          >
            No
          </Button>
          <Button
            className="btn-theme-primary"
            onClick={() => handleModalClick("yes")}
          >
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
