import styles from "./FutureBookingCard.module.css"

function FutureBookingCardByRoom({ futureBookings, setCurrentBooking }) {
  return (
    <div className={styles.futureBookingCard}>
      <ul>
        {futureBookings.map((booking) => (
          <div key={booking.id} >
            {booking.meeting_name}
            <div>Start: {booking.start_date}</div>
            <div>End: {booking.end_date}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}


export default FutureBookingCardByRoom;