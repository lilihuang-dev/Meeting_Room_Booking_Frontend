import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Bookings from './Pages/Bookings/Bookings';
import NewMeetingRoom from './Pages/NewMeetingRoom/NewMeetingRoom';
import SingMeetingRoom from './Pages/SingMeetingRoom/SingMeetingRoom';
import SingleBooking from './Pages/SingleBooking/SingleBooking';
import styles from "./App.module.css";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ currentMeetingRoom, setCurrentMeetingRoom ] = useState({});
  const [ currentBookingDisplaying, setCurrentBookingDisplaying ] = useState({});

  useEffect(() => {

  fetch(`${API}/meeting-rooms`)
  .then((response) => response.json())
  .then((data) => {
    setMeetingRooms(data.result);
    setLoading(false);
  })
  .catch((error) => {
    console.error('Error fetching meeting rooms:', error);
    setLoading(false);
  });
}, [meetingRooms]);

if (loading) {
  return <p>Loading meeting rooms...</p>;
}

const handleCreateMeetingRoom = (newMeetingRoom) => {
  setMeetingRooms([...meetingRooms, newMeetingRoom]);
}

  return (
    <div className={styles.App}>
      <Router>
      <NavBar />
      <Routes>
        <Route exact path="/"  element={<Home 
                                          meetingRooms = { meetingRooms } 
                                          setCurrentMeetingRoom = { setCurrentMeetingRoom }
                                        />} />
        <Route path="/bookings" element={<Bookings setCurrentBookingDisplaying = { setCurrentBookingDisplaying }/>} />
        <Route path="/meeting-rooms/:id" element={<SingMeetingRoom currentMeetingRoom = { currentMeetingRoom } />} />
        <Route path="/bookings/:id" element={<SingleBooking currentBookingDisplaying = { currentBookingDisplaying }/>} />
        <Route path="/meeting-rooms/new" element={<NewMeetingRoom onCreateMeetingRoom = { handleCreateMeetingRoom }/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;