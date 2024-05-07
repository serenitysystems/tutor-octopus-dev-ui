const QuestionCard = ({ data, index }) => {
  return (
    <div className="fw-bold">
      <div>Questions&nbsp;{index}</div>
      <div>{data.questionName}</div>
      {data.options.map((value) => {
        return (
          <div className="d-flex align-items-center gap-2">
            <input type="checkbox" />
            <>{value}</>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionCard;
