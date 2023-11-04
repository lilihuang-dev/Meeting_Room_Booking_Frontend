import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import convertTimeformat from '../../helpers/convertDateToDisplay';

const API = process.env.REACT_APP_API_URL;

function FutureBookingCardOnBookings({ bookings , setCurrentBookingDisplaying }) {

    return (
      <ul>
        {bookings.map((booking) => (
          <li key={booking.booking_id}>
            <Link
              to={`/bookings/${booking.booking_id}`}
              onClick = {() => setCurrentBookingDisplaying(booking)}
            >
              <strong>{booking.meeting_name}</strong>
            </Link>
            <p>
              <strong>Meeting Room: </strong>
              {booking.booking_room_name}
            </p>
            <p>⏳ Start: {convertTimeformat(booking.start_date)}</p>
            <p>⌛ End: {convertTimeformat(booking.end_date)}</p>
            <p>🏬 Floor: {booking.booking_room_floor}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default FutureBookingCardOnBookings;
  