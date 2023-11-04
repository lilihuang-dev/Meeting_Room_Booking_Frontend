import AllRoomsFutureBookings from '../../Components/AllRoomsFutureBookings/AllRoomsFutureBookings';
import styles from './Bookings.module.css';

function Bookings({ currentMeetingRoom, setCurrentBookingDisplaying }) {
  console.log("Bookings: ",currentMeetingRoom)
  return (
    <div>
    <AllRoomsFutureBookings 
      currentMeetingRoom = { currentMeetingRoom }
      setCurrentBookingDisplaying = { setCurrentBookingDisplaying }/> 
    </div>
  );
}

export default Bookings