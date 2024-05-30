import CanvasChart from "../../chart/CanvasChart";
import { DUMMYQUIZRESULTS } from "../../utils/constants.utils";

const CombineCharts = ({ recordData }) => {
  console.log(recordData?.student_performance?.submitted_by);
  return (
    <div className="d-flex p-3 gap-3" style={{ height: "300px" }}>
      <div className="d-flex flex-column gap-2" style={{ width: "40%" }}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="d-flex gap-2">
            <img src="/img/paper.svg" className="logoimgy1" />
            <div className="fs-4">
              {recordData?.student_performance?.submitted_by ||
                0} 
            </div>
          </div>
          <p>
            SUBMITTED (OUT OF{" "}
            {recordData?.student_performance?.total_students ||
              DUMMYQUIZRESULTS?.total_students}
            )
          </p>
        </div>
        <hr />
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="d-flex gap-2">
            <img src="/img/student.svg" className="logoimgy1" />
            <div className="fs-4">
              {recordData?.student_performance?.averageScore ||
                0}
            </div>
          </div>
          <p>CLASS AVERAGE</p>
        </div>
      </div>
      <hr style={{ width: "1px", height: "auto", background: "black" }} />
      <CanvasChart  perform={recordData.student_performance.performance}/>
    </div>
  );
};

export default CombineCharts;
