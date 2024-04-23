import React, { useEffect, useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar';
import Sidenavbar from '../SideNavbar/Sidenavbar';
import TopBar from '../SideNavbar/TopBar';
import './Event_Calendar.css';
import { toast } from 'react-toastify';


import { Card, Form } from 'react-bootstrap';
import { AddNewCalenderRouter, getCalendertRouter } from '../../apicalls/Calender';
import Table from '../../BackendComp/Table';


const localizer = momentLocalizer(moment);

const Event_Calendar = ({ userData }) => {
  const [events, setEvents] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [description, setEventdesciption] = useState('');

  const [selectEvent, setSelectEvent] = useState(null);
  const [view, setView] = useState('month'); // Default view is month

  const handleSelectSlot = (slotInfo) => {
    console.log("chekc",slotInfo)
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
  };

  const handleSelectEvent = (event) => {
    console.log(event)
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event[0].eventTitle);
    setEventTime(event[0].time.substring(0,5))
  };

  const saveEvent = async() => {
   // console.log(description,eventTime,eventTitle)
    if (eventTitle && selectedDate && eventTime && description) {
      //console.log()
      if (selectEvent) {
        const updatedEvent = { time:eventTime, title: eventTitle,eventDescription:description,managedBy:sessionStorage.getItem('userId') };
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent : event
        );
        //console.log(updatedEvent)
        setEvents(updatedEvents);
      } else {
        const newEvent = {
          title: eventTitle,
          start: moment(selectedDate).set({ hour: eventTime.split(':')[0], minute: eventTime.split(':')[1] }).toDate(),
          end: moment(selectedDate).set({ hour: eventTime.split(':')[0], minute: eventTime.split(':')[1] }).add(1, 'hours').toDate(),
          time: eventTime,
          date:(selectedDate),
          eventDescription:description,
          managedBy:sessionStorage.getItem('userId')
        };
        // const reqdate = new Date(newEvent.time);
        // newEvent.date = reqdate.getDate();
        // newEvent.time=reqdate.getTime();

// Set the time property to a formatted string (e.g., "15:30:00")
       // newEvent.time = `${reqdate.getHours()}:${reqdate.getMinutes()}:${reqdate.getSeconds()}`;
      //   console.log(newEvent);
      //   const response = await getCalendertRouter(sessionStorage.getItem('userId'));
      //  if(response.success===true){
      //   setEvents(response.data);
      //  }
        //console.log(events)
        const res = await AddNewCalenderRouter(newEvent);
        if(res.success===true){
          toast.success('Added event successfully');
          getCalenders();
          
        }
        console.log(res.data);

      }
      setShowModal(false);
      setEventTitle('');
      setEventTime('');
      setSelectEvent(null);
    }

    //console.log("apple");



  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event !== selectEvent);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle('');
      setEventTime('');
      setSelectEvent(null);
      setEventdesciption('');
    }
  };

  const handleNavigate = (action) => {
    const newDate = action === 'BACK' ? moment().subtract(1, view) :
      action === 'TODAY' ? moment() :
        moment().add(1, view);

    setSelectedDate(newDate.toDate());
  };


  const getCalenders=async()=>{
    const response = await getCalendertRouter(sessionStorage.getItem('userId'));
    console.log(response)
    if(response.success===true){
      setEvents(response.data);
      
    console.log(events)
  }
}



useEffect(() => {
  getCalenders();
}, []);


const CustomEvent = ({ event }) => {
  console.log(event)
  return (
    <div>
      {/* Customize the content as per your requirement */}
      <strong>done</strong>
      <p>done</p>
    </div>
  );
};



  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" className="col-md-8 col-lg-9 sidebar5" style={{background:"#f5efef"}}>
            <TopBar userData={userData} />

            <div className="dashboard-header px-md-4" style={{ padding: '0px 0px 70px 0px' }}>
              <div class="container p-2 rougw" style={{ marginLeft: "20px" }}>
                <div class="row">

                  <div class="col-xs-12 col-sm-12 p-3">
                    <select aria-label="Default select example " className='selecthh'
                     style={{ border:"none", fontWeight:"600", color:"black", background:"#f5efef",backgroundColor:"#f5efef"}}>
                      <option>Teacher Attendance</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                  </div>


                </div>

                <div class="row bbbcolrow">

                  <div class="col-xs-12 col-sm-5 bbbcol">
                    <div class="boxnm">
                      <p style={{margin:"0px"}}>Days Present</p>
                    <h5 style={{margin:"0px"}}>21</h5>
                    </div>
                  </div>

                 

                  <div class="col-xs-12 col-sm-5 bbbcol">
                    <div class="boxnm">
                      <p style={{margin:"0px"}}>Days Absent</p>
                      <h5>01</h5>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-1 bbbcol">
                    
                  </div>

                </div>

              </div>

              <Card className="addnewcard09">
                <Card.Body className="addstutnet109">
                  <div style={{ height: '500px' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <div class="containern ">
                        <div class="row broeur8">
                          <div class="col-xs-12 col-sm-4 bnhhcol">
                            <div class="">
                              {/* <select
                                id="view"
                                value={view}
                                onChange={(e) => setView(e.target.value)}
                                style={{ marginLeft: '10px' }} className='selectmonthb'
                              >
                                <option value="month">Month</option>
                                <option value="week">Week</option>
                                <option value="day">Day</option>
                              </select> */}
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-4 bnhhcol">
                          </div>
                          <div class="col-xs-12 col-sm-4 mnnnn">
                            <div class="">
                              <button onClick={() => handleNavigate('BACK')} className='bthnui'>Back</button>
                              <button onClick={() => handleNavigate('TODAY')} className='bthnui'>Today</button>
                              <button onClick={() => handleNavigate('NEXT')} className='bthnui'>Next</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Calendar
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ margin: '50px' }}
                      selectable={true}
                      onSelectSlot={handleSelectSlot}
                      onSelectEvent={handleSelectEvent}
                      view={view} // Set the view dynamically
                      date={selectedDate} // Set the selected date for the calendar
                      components={{
                        event: CustomEvent // Use custom Event component
                      }}
                    />
                    {
                      events.length>0 &&
                      <Table data={events}/>
                    }
                    {ShowModal && (
                      <div
                        className="modal"
                        style={{
                          display: 'block',
                          backgroundColor: '#8080807d',
                          position: 'fixed',
                          top: 0,
                          border: 0,
                          left: 0,
                          right: 0,
                        }}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">{selectEvent ? 'Edit Event' : 'Add Event'}</h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => {
                                  setShowModal(false);
                                  setEventTitle('');
                                  setEventTime('');
                                  setSelectEvent(null);
                                  setEventdesciption('');
                                }}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <label>Event Title</label>
                              <input
                                type="text"
                                className="form-control mb-3"
                                id="eventTitle"
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)} style={{ borderRadius: "30px" }}
                              />
                              <label>Event Time</label>
                              <input
                                type="time"
                                className="form-control mb-2"
                                id="eventTime"
                                value={eventTime}
                                onChange={(e) => setEventTime(e.target.value)}
                                style={{ borderRadius: "30px" }}
                              />
                             <label>Description</label>
                              <textarea
                                className="form-control"
                                name="description"
                                rows="3"
                                value={description}
                                onChange={(e) => setEventdesciption(e.target.value)} 
                                style={{ borderRadius: "30px" }}
                              ></textarea>
                            </div>

                            <div className="modal-footer">
                              {selectEvent && (
                                <button type="button" className="btn btn-danger me-2" onClick={deleteEvents} style={{ borderRadius: "30px" }}>
                                  Delete Event
                                </button>
                              )}
                              <button type="button" onClick={saveEvent} className="btn btn-primary" style={{ borderRadius: "30px" }}>
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Event_Calendar;