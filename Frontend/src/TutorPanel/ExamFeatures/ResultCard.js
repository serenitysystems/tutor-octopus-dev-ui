import MobilemenuNavbar from "../SideNavbar/MobilemenuNavbar";
import Sidenavbar from "../SideNavbar/Sidenavbar";
import TopBar from "../SideNavbar/TopBar";

const ResultCard = ({ userData }) => {
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
            <div
              className="dashboard-header px-md-4"
              style={{ padding: "0px 0px 70px 0px" }}
            >
              <div className="fs-1 text-center">Result to be shown here</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
