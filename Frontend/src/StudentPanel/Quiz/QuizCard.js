import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setActiveQuiz } from "../../redux/quizslice";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";

const QuizCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }

  const dateString = "2024-05-08";
  const formattedDate = formatDate(dateString);
  const [modalOpen,setmodalOpen]=useState(false);
  const [quizOpen,setQuizOpen]=useState(false);
  console.log(formattedDate);

  // const [QuestionPalette,setQuestionPalette]=useState(false);
  const handleClose = () => {
    setmodalOpen(false);
  };

  const handleClick = () => {
    const datecheck=new Date(data.date);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

// console.log(formattedDate); // Output: "2024-05-15"

    console.log(data.date,".......",datecheck," ....",new Date())
    if(data.date===formattedDate){
      if(data.attempted===false){
        setmodalOpen(true); 
      }
      else{
        toast.info('Seems ! You have already attempted this quiz!!')
      }
     

    }
    else{
      toast.info('this quiz is locked.')
    }
   
  };
  const handleQuizOpen=()=>{
    dispatch(setActiveQuiz(data));
    navigate(`/student/${data._id}`)
    console.log("done")

  }
  return (
    <div>
      <button
        // to={`/student/${data._id}`}
        className="quiz-card border-1 p-3 rounded-1 cursor-pointer card"
        onClick={() => handleClick()}
      >
        <div className="fw-bold">{data?.subject}</div>
        <div className="d-flex gap-2 opacity-75">
          <span>{formatDate(data.date)}</span>
        </div>
        <p className="opacity-75 mt-2">{data?.description}</p>
      </button>

      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Read all rules and regulation before attempting Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>No cheating is allowed.......</li>
            <li>Switching tabs will submit the quiz automatically . So, Stay on the same tab</li>
            <li>{data.description}</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Go back
          </Button>
          <Button variant="primary" onClick={handleQuizOpen}>
            Start
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuizCard;
