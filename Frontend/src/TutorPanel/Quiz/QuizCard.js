import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveQuiz } from "../../redux/quizslice";

const QuizCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActiveQuiz(data));
  };
  return (
    <Link
      to={data?.id}
      className="quiz-card border-1 p-3 rounded-1 cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="fw-bold">{data.name}</div>
      <div className="d-flex gap-2 opacity-75">
        <span>{data.date}</span>
        <span>
          {"("}
          {data.batch}
          {")"}
        </span>
      </div>
      <p className="opacity-75">{data.subject}</p>
      <p>{data.description}</p>
    </Link>
  );
};

export default QuizCard;
