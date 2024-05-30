import React from "react";
import MobilemenuNavbar from "../SideNavbar/MobilemenuNavbar";
import Sidenavbar from "../SideNavbar/Sidenavbar";
import TopBar from "../SideNavbar/TopBar";
import ExamForm from "./ExamForm";

const ExamPractice = ({userData}) => {
  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            {/* THIS IS A CREATE-QUIZ TAB */}
            <div class="dashboard-header px-md-4">
                <ExamForm/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ExamPractice;
