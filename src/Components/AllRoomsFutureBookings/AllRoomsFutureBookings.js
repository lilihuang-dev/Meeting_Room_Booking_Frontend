import React, { useState, useEffect } from 'react';
import styles from "./AllRoomsFutureBookings.module.css"
import FutureBookingCardOnBookings from '../FutureBookingCardOnBookings/FutureBookingCardOnBookings';

const API = process.env.REACT_APP_API_URL;

const AllRoomsFutureBookings = ({ currentMeetingRoom, setCurrentBookingDisplaying }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${API}/bookings`)
    .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Failed to fetch bookings');
        }
    })
    .then((data) => {
        setBookings(data.result);
    })
    .catch((error) => {
        console.error('Error fetching bookings:', error);
    })
  }, [bookings]);

  

  return (
    <div>
      {/* <h2>Future Bookings</h2> */}
      <div className={styles.scrollContainer}>
        <FutureBookingCardOnBookings 
          currentMeetingRoom = { currentMeetingRoom }
          bookings = { bookings }
          setCurrentBookingDisplaying = { setCurrentBookingDisplaying }
        />
      </div>
    </div>
  );
};

export default AllRoomsFutureBookings;
