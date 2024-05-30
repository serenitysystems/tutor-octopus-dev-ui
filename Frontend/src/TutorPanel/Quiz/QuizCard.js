import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setActiveQuiz } from "../../redux/quizslice";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteQuiz } from "../../apicalls/Questions";
import { Button } from "react-bootstrap";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";

const QuizCard = ({ data,quizType }) => {
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
  console.log(formattedDate);

  // const [QuestionPalette,setQuestionPalette]=useState(false);

  const handleClick = () => {
    dispatch(setActiveQuiz(data));
    if(quizType==='Quiz'){
      navigate(`/Quiz/${data._id}`)
    }
    else{
      navigate(`/ExamFeatures/${data._id}`)
    }
   
  };
  const handleDeleteClick = async () => {
    const quizId = data._id;
    const userId=sessionStorage.getItem('userId');
    const payload = { userId, quizId };
    //console.log(payload);
    const response = await deleteQuiz(payload);
    //console.log(response);
    if (response.success === true) {
      toast.success(response.message);
      navigate("/Quiz"); //CHECK WHY THIS IS NOT WORKING
    } else {
      toast.info(response.message);
      //setShowModal(true);
    }
  };
  return (
    <div>
      {
        quizType==='Quiz' &&
        <div>
           <Button
        //to={}
        className="quiz-card border-1 p-3 rounded-1 cursor-pointer card"
        onClick={() => handleClick()}
      >
        <div className="fw-bold">{data?.subject}</div>
        <div className="d-flex gap-2 opacity-75">
          <span>{formatDate(data.date)}</span>
          <span>
            {"("}
            {data.batch}
            {")"}
          </span>
        </div>
        <p className="opacity-75 mt-2">{data?.description}</p>
       
      </Button>
       <Button variant="link" className="text-danger"  onClick={handleDeleteClick}>
       <RiDeleteBin5Line  />
     </Button>
     <Button variant="link" className="text-warning"  onClick={handleClick}>
        <RiEditBoxLine />
      </Button>
        </div>
      }
      {
        quizType!='Quiz' &&
        <Button
        // to={`/ExamFeatures/${data._id}`}
        className="quiz-card border-1 p-3 rounded-1 cursor-pointer card"
        onClick={() => handleClick()}
      >
        <div className="fw-bold">{data?.subject}</div>
        <div className="d-flex gap-2 opacity-75">
          <span>{formatDate(data.date)}</span>
          <span>
            {"("}
            {data.batch}
            {")"}
          </span>
        </div>
        <p className="opacity-75 mt-2">{data?.description}</p>
        <Button variant="link" className="text-danger"    onClick={handleDeleteClick}>
        <RiDeleteBin5Line  />
      </Button>
     
      </Button>
      }
      
     
      
    </div>
  );
};

export default QuizCard;
