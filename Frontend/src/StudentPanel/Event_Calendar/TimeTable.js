import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import './Event_Calendar.css';
import { Card, Form } from 'react-bootstrap';
import MobilemenuNavbarStu from '../SideNavbarStudent/MobilemenuNavbarStu';
import SidenavbarStu from '../SideNavbarStudent/SidenavbarStu';
import TopBarStu from '../SideNavbarStudent/TopBarStu';

const localizer = momentLocalizer(moment);

const TimeTable = () => {
  const [events, setEvents] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [selectEvent, setSelectEvent] = useState(null);
  const [view, setView] = useState('month'); // Default view is month

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
  };

  const handleSelectEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
  };

  const saveEvent = () => {
    if (eventTitle && selectedDate && eventTime) {
      if (selectEvent) {
        const updatedEvent = { ...selectEvent, title: eventTitle };
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent : event
        );
        setEvents(updatedEvents);
      } else {
        const newEvent = {
          title: eventTitle,
          start: moment(selectedDate).set({ hour: eventTime.split(':')[0], minute: eventTime.split(':')[1] }).toDate(),
          end: moment(selectedDate).set({ hour: eventTime.split(':')[0], minute: eventTime.split(':')[1] }).add(1, 'hours').toDate(),
        };
        setEvents([...events, newEvent]);
      }
      setShowModal(false);
      setEventTitle('');
      setEventTime('');
      setSelectEvent(null);
    }
  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event !== selectEvent);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle('');
      setEventTime('');
      setSelectEvent(null);
    }
  };

  const handleNavigate = (action) => {
    const newDate = action === 'BACK' ? moment().subtract(1, view) :
      action === 'TODAY' ? moment() :
        moment().add(1, view);

    setSelectedDate(newDate.toDate());
  };

  return (
    <div>
     

            <div className="dashboard-header px-md-4" style={{ padding: '0px 0px 70px 0px' }}>
              <div class="container p-2 rougw" style={{ marginLeft: "20px" }}>
                <div class="row">

                  <div class="col-xs-12 col-sm-12 p-3">
                    <select aria-label="Default select example " className='selecthh'
                     style={{ border:"none", fontWeight:"600", color:"black", background:"#f5efef",backgroundColor:"#f5efef"}}>
                      <option>Teacher Attandance</option>
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
                              <select
                                id="view"
                                value={view}
                                onChange={(e) => setView(e.target.value)}
                                style={{ marginLeft: '10px' }} className='selectmonthb'
                              >
                                <option value="month">Month</option>
                                <option value="week">Week</option>
                                <option value="day">Day</option>
                              </select>
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
                    />
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
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ borderRadius: "30px" }}></textarea>
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
          
    </div>
  );
};

export default TimeTable;