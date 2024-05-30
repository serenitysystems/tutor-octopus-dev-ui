import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Table, Button } from "react-bootstrap"; // Import Table and Button components from React Bootstrap
import { sendReminder } from "../../apicalls/Questions";
import { useNavigate } from "react-router-dom";
import './commonTable.css'

const CommonTable = ({ head,data,type,date }) => {
  console.log(date)

  const navigate=useNavigate();
  const handleShowRecord=(id,batch,managedBy)=>{
   navigate('/QuizRecord', { state: { id:id,batch:batch,managedBy:managedBy} });

  }
 

  return (
    <div className="container mt-4">
    <div className="table-responsive">
      <table className="table table-striped word-wrap">
          <thead>
            <tr>
              {head.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
              {/* <th>Reminder</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <ul>
                    <li>
                      <b>Subject</b>
                      {"-> " + item.subject}
                    </li>
                    <li>
                      <b>Batch</b>
                      {"-> " + item.batch}
                    </li>
                    <li>
                      <b>Date</b>
                      {"-> " + item.date}
                    </li>
                  </ul>
                </td>
                <td>{item.description}</td>
                <td>{item.passingCriteria}</td>
                <td>{item.questions.length}</td>
                <td>{item.result.length}</td>
                {type === 'previous' && (
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        handleShowRecord(item._id, item.batch, item.userId)
                      }
                      className="btn btn-success"
                    >
                      Show record
                    </button>
                  </td>
                )}
                 {type === 'upcoming' &&  (
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        handleShowRecord(item._id, item.batch, item.userId)
                      }
                      className="btn btn-success"
                      // disabled={item.date!=date}
                    >
                      Show record
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
      </table>
    </div>
    </div>
  );
};

export default CommonTable;
