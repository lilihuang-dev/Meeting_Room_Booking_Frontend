import AllRoomsFutureBookings from '../../Components/AllRoomsFutureBookings/AllRoomsFutureBookings';
import styles from './Bookings.module.css';

function Bookings({ setCurrentBookingDisplaying }) {
  return (
    <div>
      <h2>Bookings Page</h2>
    
    <AllRoomsFutureBookings setCurrentBookingDisplaying = { setCurrentBookingDisplaying }/> 
    </div>
  );
}

export default Bookings