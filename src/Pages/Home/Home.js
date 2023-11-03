import React, { useState } from 'react';
import SearchAvailableRoomsForm from '../../Components/SearchAvailableRoomsForm/SearchAvailableRoomsForm';
import AllMeetingRooms from '../../Components/AllMeetingRooms/AllMeetingRooms';
import styles from './Home.module.css';

function Home( { meetingRooms, setCurrentMeetingRoom, setCurrentBooking } ) {
  const [availableRooms, setAvailableRooms] = useState([]);
  
  const handleSearch = (searchCriteria) => {
    // Perform the filtering based on search criteria
    const filteredRooms = // Filter your list of rooms here using searchCriteria
    setAvailableRooms(filteredRooms);
  }

  return (
    <div >
      <SearchAvailableRoomsForm onSearch={handleSearch} />
      <div></div>
      <AllMeetingRooms 
        meetingRooms = { meetingRooms } 
        setCurrentBooking = { setCurrentBooking }
        setCurrentMeetingRoom = { setCurrentMeetingRoom 
      }/>
    </div>
  );
}

export default Home;
