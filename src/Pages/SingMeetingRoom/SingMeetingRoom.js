import { useState } from 'react';
import BookingForm from '../../Components/BookingForm/BookingForm';
import AllFutureBookingsByARoom from '../../Components/AllFutureBookingsByARoom/AllFutureBookingsByARoom';
import styles from "./SingleMeeingRoom.module.css";

function SingleMeetingRoom({ currentMeetingRoom, setCurrentBooking }) {
  const [futureBookings, setFutureBookings] = useState([]);
  const { room_id } = currentMeetingRoom;
  return (
    <div className={styles.singleMeetingRoom}>
      <div className={styles.roomInfoContainer}>
        <div>{currentMeetingRoom.room_name}</div>
        <div>👥  Capacity: {currentMeetingRoom.capacity}</div>
        <div>🏬  Floor: {currentMeetingRoom.floor}</div>
      </div>
      <hr />
      <BookingForm roomId={room_id} setFutureBookings = {setFutureBookings }/>
      <hr />
      <AllFutureBookingsByARoom 
        roomId={room_id} 
        futureBookings = { futureBookings }
        setFutureBookings = {setFutureBookings }
        setCurrentBooking={setCurrentBooking} />
    </div>
  );
}

export default SingleMeetingRoom;


