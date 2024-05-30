import React from "react";
import { Card } from "react-bootstrap";

const StudentHome = () => {
  return (
    <div
      className="dashboard-header px-md-4"
      style={{ padding: "0px 0px 70px 0px" }}
    >
      {/* <h1 className="h2">Dashboard</h1> */}
      <Card className="addnewcard899">
        <Card.Body className="addstutnet1">
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Rank</th>
                <th>Marks Percentage</th>
              </tr>
            </thead>
            <tbody>
              {/* {students.map((student, index) => (
                      <tr key={index}>
                        <td>{student.studentName}</td>
                        <td>{student.rank}</td>
                        <td>{student.marksPercentage}%</td>
                      </tr>
                    ))} */}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentHome;
