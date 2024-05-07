import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Stack } from "react-bootstrap";
import TopBar from "../SideNavbar/TopBar";
import MobilemenuNavbar from "../SideNavbar/MobilemenuNavbar";
import SelectBatch from "../../BackendComp/SelectBatch";
import SelectDate from "../../BackendComp/SelectDate";
import Description from "./Description";
import Sidenavbar from "../SideNavbar/Sidenavbar";
import QuizCard from "./QuizCard";
import "../OnlineResources.css";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { quizesData, setQuizes } from "../../redux/quizslice";

const QUIZES = [
  {
    name: "Maths - 1",
    id: "1",
    batch: "2023",
    date: "25-12-2023",
    subject: "maths quiz for chapter 1",
    description: "covers trigometry topics",
    questions: [
      {
        questionName: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        questionName: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        questionName: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
    ],
    userId:sessionStorage.getItem('user')
  },
  {
    name: "Maths - 2",
    id: "2",
    batch: "2023",
    date: "25-12-2023",
    subject: "maths quiz for chapter 1",
    description: "covers trigometry topics",
    questions: [
      {
        questionName: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        questionName: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        questionName: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
    ],
    id:sessionStorage.getItem('user')
  },
];

const QuizMain = ({ userData }) => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setQuizes(QUIZES));
  const data = useSelector(quizesData);
  console.log(data);
  useEffect(() => {
    console.log(data);
  }, [data]);
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
            <div className="p-4 mb-1">
              <div className="w-100 d-flex align-items-center justify-content-end">
                <Button
                  className="rounded-sm py-2 px-4 mb-4 d-flex align-items-center"
                  onClick={() => {
                    navigate("/Quiz/new-quiz");
                  }}
                >
                  + Add new Quiz
                </Button>
              </div>
              <div className="d-flex flex-row bd-highlight gap-3">
                {QUIZES.map((quiz) => (
                  <QuizCard data={quiz} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default QuizMain;
