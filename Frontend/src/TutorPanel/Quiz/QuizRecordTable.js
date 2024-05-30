import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Table, Button } from "react-bootstrap"; // Import Table and Button components from React Bootstrap
import { removesubmitQuiz, sendReminder } from "../../apicalls/Questions";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";

const QuizRecordsTable = ({ data,quizId }) => {

  const [resultData,setResultData]=useState(data);
  //console.log(quizId)
  
  const reallowQuiz=async(email)=>{
    const payload={
      email:email,
      quizId:quizId
    }
    const response=await removesubmitQuiz(payload);
    if(response.success===true){
      //setResultData(response.data);
      toast.info('Now ,the student can re-appear for this exam .Refresh the page updating status')
     // window.location.reload();
    }
    else{
      toast.info(response.message)
    }


  }

  return (
    <div className="container mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>email</th>
            <th>full Marks</th>
            <th>percentage</th>
            <th>Status</th>
            <th>Action</th>
            {/* <th>Reminder</th> */}
          </tr>
        </thead>
        <tbody>
          {resultData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>{item.email}</td>
              <td>{item.totalMarks}</td>
              <td>{item.percentage}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={()=>reallowQuiz(item.email)} className="bnnbtn" >
                  <RiDeleteBin5Line style={{ color: "red" }} />
                </button>
              </td>
              {/* <td>{item.reminder?item.reminder:"no need"}</td> */}
              {/* <td>
               {
                item.status!="not appeared" ?"Attemped":
                <Button
                disabled={!item.reminder}
                variant="primary"
                onClick={() => handleReminder(item)}
              >
                Send Reminder
              </Button>
                
               }
              
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default QuizRecordsTable;
