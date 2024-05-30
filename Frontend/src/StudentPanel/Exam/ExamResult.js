import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { FaTimesCircle, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';

const ExamResult = () => {
    const data={
        failed: { percentage: 15.91, min: 40 },
  score: { value: 1.75, marks: 11 },
  accuracy: 37.5,
  speed: { value: 288, unit: 'Que/Hour' },
  totalQuestions: { count: 11, answered: 6, skipped: 5, unanswered: 3 },
  totalTime: { minutes: 30, spent: '1 Min 06 Sec', correct: '16 Sec', wrong: '1 Min 19 Sec', other: '1 Min 25 Sec' },
  scoredMarks: { earned: 3, negative: -4.25, total: 1.75 }
    }
  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={3} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Failed</Card.Title>
              <Card.Text style={{ color: '#dc3545' }}>
                {data.failed.percentage}%<br/>Min {data.failed.min}%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Score</Card.Title>
              <Card.Text style={{ color: '#28a745' }}>
                {data.score.value}<br/>Marks {data.score.marks}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Accuracy</Card.Title>
              <Card.Text style={{ color: '#17a2b8' }}>
                {data.accuracy}%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Speed</Card.Title>
              <Card.Text style={{ color: '#ffc107' }}>
                {data.speed.value}<br/>{data.speed.unit}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} sm={12} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total {data.totalQuestions.count} Questions</Card.Title>
              <div className="d-flex justify-content-center align-items-center">
                <div style={{ color: '#28a745' }}>
                  <FaCheckCircle size={50} />
                  <p>{data.totalQuestions.answered} Answered</p>
                </div>
                <div style={{ color: '#ffc107', marginLeft: '20px' }}>
                  <FaHourglassHalf size={50} />
                  <p>{data.totalQuestions.skipped} Skipped</p>
                </div>
                <div style={{ color: '#dc3545', marginLeft: '20px' }}>
                  <FaTimesCircle size={50} />
                  <p>{data.totalQuestions.unanswered} Unanswered</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total {data.totalTime.minutes} Minutes</Card.Title>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <FaCheckCircle size={20} color="#28a745" />
                  <p>{data.totalTime.correct} Correct</p>
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <FaTimesCircle size={20} color="#dc3545" />
                  <p>{data.totalTime.wrong} Wrong</p>
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <FaHourglassHalf size={20} color="#ffc107" />
                  <p>{data.totalTime.other} Other</p>
                </div>
              </div>
              <p>{data.totalTime.spent} Spent</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Scored Marks</Card.Title>
              <Table bordered className="mt-3">
                <tbody>
                  <tr>
                    <td>Marks Earned</td>
                    <td>{data.scoredMarks.earned}</td>
                  </tr>
                  <tr>
                    <td>Negative Marks</td>
                    <td>{data.scoredMarks.negative}</td>
                  </tr>
                  <tr>
                    <td>Total Marks</td>
                    <td>{data.scoredMarks.total}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamResult;