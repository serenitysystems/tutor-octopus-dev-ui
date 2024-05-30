import { useDispatch, useSelector } from "react-redux";
import StudentSideNavBar from "../../TutorPanel/SideNavbar/StudentSideBar";
import { ReadQuiz } from "../../apicalls/Questions";
import { setQuizes } from "../../redux/quizslice";
import { constants } from "../../utils";
import QuizCard from "./QuizCard";
import { useEffect } from "react";

const StudentQuiz = () => {


  const data = useSelector((state) => {
    return state.quiz.data;
  });

  const dispatch=useDispatch();
  const fetchData = async () => {
    const Quizes = await ReadQuiz({userId:sessionStorage.getItem("userId"),role:"Student"});
    dispatch(setQuizes(Quizes));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <div class="row"> */}
        {/* <nav class="col-md-3 d-none d-md-block bg-light sidebar vh-100 overflow-auto">
          <StudentSideNavBar sideBarOptions={constants.STUDENTSIDEBAROPTIONS} />
        </nav> */}
        {/* <main
          role="main"
          class="col-md-8 col-lg-9 sidebar5 vh-100 overflow-auto"
        > */}
          {/* <TopBar userData={userData} /> */}
          <div
            className="dashboard-header px-md-4"
            style={{ padding: "0px 0px 70px 0px" }}
          >
             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                {data?.map((quiz, index) => (
                  <div className="col mb-3" key={index}>
                    <div className="">
                      <QuizCard data={quiz} />
                    </div>
                  </div>
                ))}
              </div>
            
          </div>
        {/* </main> */}
      </div>
    // </div>

  )
  
  
};

export default StudentQuiz;
