import convertTimeformat from '../../helpers/convertDateToDisplay';
import styles from "./FutureBookingCard.module.css"

function FutureBookingCardByRoom({ futureBookings, setCurrentBooking }) {
  return (
    <div className={styles.futureBookingCard}>
      <ul>
        {futureBookings.map((booking) => (
          <div key={booking.id} >
            <h3>{booking.meeting_name}</h3>
            <div>Start: {convertTimeformat(booking.start_date)}</div>
            <div>End: {convertTimeformat(booking.end_date)}</div>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}


export default FutureBookingCardByRoom;