import { constants } from "../../utils";
import StudentSideNavBar from "../../TutorPanel/SideNavbar/StudentSideBar";
import TopBarStu from "../../StudentPanel/SideNavbarStudent/TopBarStu";
import MobilemenuNavbarStu from "../../StudentPanel/SideNavbarStudent/MobilemenuNavbarStu";

export default function Layout({ children }) {
  return (
    <div>
      <div class="container-fluid">
        <MobilemenuNavbarStu 
        sideBarOptions={constants.STUDENTSIDEBAROPTIONS}
        />
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar vh-100 overflow-auto">
            <StudentSideNavBar
              sideBarOptions={constants.STUDENTSIDEBAROPTIONS}
            />
          </nav>
          <main
            role="main"
            class="col-md-8 col-lg-9 sidebar5 vh-100 overflow-auto"
          >
            <TopBarStu />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
