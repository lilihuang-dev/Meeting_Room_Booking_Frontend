import { useState } from 'react';
import SearchAvailableRoomsForm from '../../Components/SearchAvailableRoomsForm/SearchAvailableRoomsForm';
import AllMeetingRooms from '../../Components/AllMeetingRooms/AllMeetingRooms';
import styles from './Home.module.css';

function Home({ meetingRooms, setCurrentMeetingRoom, setCurrentBooking }) {
  const [availableRooms, setAvailableRooms] = useState(meetingRooms); 

  const handleSearch = (filteredData) => {
    setAvailableRooms(filteredData);
  };

  return (
    <div>
      <SearchAvailableRoomsForm onSearch={handleSearch} />
      <AllMeetingRooms
        meetingRooms={availableRooms}
        setCurrentBooking={setCurrentBooking}
        setCurrentMeetingRoom={setCurrentMeetingRoom}
      />
    </div>
  );
}

export default Home;

