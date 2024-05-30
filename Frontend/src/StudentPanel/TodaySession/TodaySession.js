import React from 'react'

import { Button, Card, Stack } from 'react-bootstrap'
import MobilemenuNavbarStu from '../SideNavbarStudent/MobilemenuNavbarStu'
import SidenavbarStu from '../SideNavbarStudent/SidenavbarStu'
import TopBarStu from '../SideNavbarStudent/TopBarStu'

import './TodaySession.css'


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const TodaySession = () => {
  return (
    <div>
      {/* <MobilemenuNavbarStu />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <SidenavbarStu />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBarStu /> */}
            <div className="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>

              <Tabs
                defaultActiveKey="session-1"
                id="fill-tab-example"
                className="mb-3  nnnlooj"
                fill
              >
                <Tab eventKey="session-1" title="Session-1" className='session5'>
                  <Card className='addnewcard899bbb'>

                    <table className="table thy">

                      <tbody className='thy'>

                        <tr className='thy'>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE117</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE198</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE234</p></td>


                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>

                        </tr>

                      </tbody>
                    </table>

                  </Card>
                  <Button className='aboutinsnbh my-5'>Reset</Button>
                </Tab>
                <Tab eventKey="session-2" title="Session-2" className='session5'>
                  <Card className='addnewcard899bbb'>

                    <table className="table thy">

                      <tbody className='thy'>

                        <tr className='thy'>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE117</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE198</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE234</p></td>


                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>

                        </tr>

                      </tbody>
                    </table>
                  </Card>
                  <Button className='aboutinsnbh my-5'>Reset</Button>
                </Tab>
                <Tab eventKey="session-3" title="Session-3" className='session5'>
                  <Card className='addnewcard899bbb'>

                    <table className="table thy">

                      <tbody className='thy'>

                        <tr className='thy'>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE117</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE198</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE234</p></td>


                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>

                        </tr>

                      </tbody>
                    </table>
                  </Card>
                  <Button className='aboutinsnbh my-5'>Reset</Button>
                </Tab>
                <Tab eventKey="session-4" title="Session-4" className='session5'>
                  <Card className='addnewcard899bbb'>

                    <table className="table thy">

                      <tbody className='thy'>

                        <tr className='thy'>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE117</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE198</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE234</p></td>


                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>CHE121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>CHE121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>MEC121</p></td>

                        </tr>
                        <tr >
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "black" }}>PEA121</p></td>
                          <td className='thy'><p style={{ color: "#FF1818" }}>PEA121</p></td>

                        </tr>

                      </tbody>
                    </table>
                  </Card>
                  <Button className='aboutinsnbh my-5'>Reset</Button>
                </Tab>
              </Tabs>

              <section class="columnsstudent">

                <div class="columnstudent ">
                  <div className='cardtt'>
                    <p className='mb-3 text-white'>Upcoming Lecture at 10:30am</p>
                    <h5 className='text-white'>Electrical Machine - 1</h5>
                    <p className='mb-5 text-white'>Class 1A</p>
                    <Stack direction="horizontal" gap={3}>
                      <div className="p- ">
                        <Button className='startg'>Start the class</Button>
                      </div>
                      <div className="p- ms-auto text-white">View details</div>

                    </Stack>
                  </div>

                </div>
                <div class="columnstudent">


                <div className='cardtt1'>
                    <p className='mb-3 text-white'>Upcoming Lecture at 10:30am</p>
                    <h5 className='text-white'>Electrical Machine - 1</h5>
                    <p className='mb-5 text-white'>Class 1A</p>
                    <Stack direction="horizontal" gap={3}>
                      <div className="p- ">
                        <Button className='startg'>Start the class</Button>
                      </div>
                      <div className="p- ms-auto text-white">View details</div>

                    </Stack>
                  </div>
                </div>

              </section>
            </div>



          {/* </main>
        </div>



      </div> */}
    </div>
  )
}

export default TodaySession
