import React, { useEffect, useState } from 'react'


import { Button, Card, Container, Dropdown, Form, Navbar, Stack } from 'react-bootstrap'
import TopBar from '../SideNavbar/TopBar'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import '../OnlineResources.css'
import './Quiz.css'
import { useNavigate } from 'react-router-dom'
import { GrNext } from 'react-icons/gr'
import { toast } from 'react-toastify'
import AddedQuestion from './AddedQuestion'
import { AddQuestionRouter } from '../../apicalls/Questions'
import SelectBatch from '../../BackendComp/SelectBatch'
import SelectDate from '../../BackendComp/SelectDate'
import Description from './Description'



const Quiz = ({userData}) => {
const [question, setQuestion] = useState('');
const [options, setOptions] = useState(['', '', '', '']);
const [checkedIndex, setCheckedIndex] = useState(-1);
const [counter, setCounter] = useState(1);
const [questionCounter, setQuestionCounter] = useState(1);
const [selectedBatch, setSelectedBatch] = useState('');
const [selectedDate, setSelectedDate] = useState();
const handleChange = (index, e) => {
  if (e.target.name === 'question') {
    setQuestion(e.target.value);
  } else if (e.target.name === 'option') {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  } else if (e.target.name === 'checkbox') {
    const newCheckedIndex = e.target.checked ? index : -1;
    setCheckedIndex(newCheckedIndex);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Question:', question);
  console.log('Options:', options);
  console.log('Checked Index:', checkedIndex);
  console.log(selectedBatch," ",selectedDate)
  if(question.length===0 || options.length<4 || checkedIndex===-1){
    toast.info('Add all fields to save the question');
    return;
  }

  const data={
    question:question,
    options:options,
    checked:checkedIndex,
    managedBy:sessionStorage.getItem('userId')
  }
  console.log(data)
  const response=await AddQuestionRouter(data);
  console.log(response);
  if(response.success===true){
    toast.success(response.message);
    setCounter(prev => prev + 1);
  }


  // Clear state values
  setQuestion('');
  setOptions(['', '', '', '']);
  setCheckedIndex(-1);
};

const handleCancel=()=>{
    setQuestion('');
    setOptions(['', '', '', '']);
    setCheckedIndex(-1);
}

const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
};
const handleDateSelect = (date) => { 
    setSelectedDate(date);
};


    return (
        <div>
            <MobilemenuNavbar userData={userData} />
            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-3 d-none d-md-block bg-light sidebar">
                        <Sidenavbar />
                    </nav>
                    <main role="main" class="col-md-8 col-lg-9 sidebar5">
                        <TopBar userData={userData} />
                        <div class="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>
                            {/* <h1 class="h2">Dashboard</h1> */}
                            <SelectBatch onBatchSelect={handleBatchSelect}/>
                            <SelectDate onDateSelect={handleDateSelect}/>
                            <Description/>
                            <Card className='addnewcard89'>
                                
                                <Card.Body className='addstutnet1 d-flex justify-content-between align-items-center '> 
                                    {/* <AddedQuestion/> */}
                                    <Form onSubmit={handleSubmit}>
                                        <h5 style={{ fontSize: '20px', fontWeight: '600' }}>Question {counter}</h5>
                                        <Form.Group className="mb-3" controlId={`question`}>
                                            <Form.Control
                                                type="text"
                                                name="question"
                                                value={question}
                                                onChange={(e) => handleChange(null, e)}
                                                required
                                                placeholder='Add question here'
                                            />
                                        </Form.Group>
                                        {[0, 1, 2, 3].map((index) => (
                                            <div key={index}>
                                                <Stack direction="horizontal" gap={3}>
                                                    <label className="-p" htmlFor={`option${index}`}>
                                                        Option {index + 1}:
                                                    </label>
                                                    <div className="p-">
                                                        <Form.Group className="mb-3" controlId={`option${index}`}>
                                                            <Form.Control
                                                                type="text"
                                                                name="option"
                                                                value={options[index]}
                                                                onChange={(e) => handleChange(index, e)}
                                                                required
                                                                placeholder='Add options here'
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="p-">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox${index}`}
                                                            name="checkbox"
                                                            checked={checkedIndex === index}
                                                            onChange={(e) => handleChange(index, e)}
                                                        />
                                                    </div>
                                                </Stack>
                                            </div>
                                        ))}
                                        <div className="button-container mt-5 d-flex gap-3">
                                            <Button  color="success" className="grnext py-2 px-5">
                                               + Add Question
                                            </Button>
                                            <Button type="submit" color="success" className="grnext py-2 px-5">
                                               Save
                                            </Button>
                                            <Button onClick={handleCancel} type="submit" color="success" className="grnext py-2 px-5">
                                               Cancel
                                            </Button>
                                        </div>
                                    </Form>
                                  
                                    <div>
                                    <img src="./img/Quiz1.png" className="Quiz4" alt="Quiz" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
export default Quiz
