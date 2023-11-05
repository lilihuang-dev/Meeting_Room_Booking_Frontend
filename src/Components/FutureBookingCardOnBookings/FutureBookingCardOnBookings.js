import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import convertTimeformat from '../../helpers/convertDateToDisplay';
import styles from "./FutureBookingCardOnBookings.module.css"

const API = process.env.REACT_APP_API_URL;


function FutureBookingCardOnBookings({ bookings, setCurrentBookingDisplaying }) {
  return (
    <ul className={styles.cardList}>
      {bookings.map((booking) => (
        <li key={booking.booking_id} className={styles.card}>
          <Link to={`/bookings/${booking.booking_id}`} className={styles.link}>
            <p className={styles.meetingName}>
              <strong>{booking.meeting_name}</strong>
            </p>
          </Link>
          <div className={styles.details}>
            <p className={styles.room}>
              <strong>Meeting Room: </strong>
              {booking.booking_room_name}
            </p>
            <p>
              <strong>⏳ Start: </strong>
              <time>{convertTimeformat(booking.start_date)}</time>
            </p>
            <p>
              <strong>⌛ End: </strong>
              <time>{convertTimeformat(booking.end_date)}</time>
            </p>
            <p className={styles.floor}>
              <strong>🏬 Floor: </strong>
              {booking.booking_room_floor}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FutureBookingCardOnBookings;