import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function FutureBookingCardOnBookings({ bookings, setCurrentBookingDisplaying }) {
    const [currentBookingRoom, setCurrentBookingRoom] = useState({});
    const [currentBooking, setCurrentBooking] = useState({});
    
  
    // useEffect(() => {
    //   fetch(`${API}/bookings/${currentBooking.booking_id}/room`)
    //     .then((response) => {
    //         console.log("response: ",response)
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('Failed to fetch current booking');
    //       }
    //     })
    //     .then((data) => {
    //         console.log("current room:", data.result)
    //       setCurrentBookingRoom(data.result);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching current booking room:', error);
    //     });
    // }, [currentBooking.booking_id]); // Include currentBooking.booking_id in the dependency array
  
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
            <p>Meeting Room: {currentBookingRoom.room_name}</p>
            <p>Start: {booking.start_date}</p>
            <p>End: {booking.end_date}</p>
            <p>Floor: {currentBookingRoom.floor}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default FutureBookingCardOnBookings;
  