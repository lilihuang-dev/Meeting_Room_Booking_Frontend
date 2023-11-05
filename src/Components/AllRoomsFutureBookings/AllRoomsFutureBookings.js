import React, { useState, useEffect } from 'react';
import styles from "./AllRoomsFutureBookings.module.css"
import FutureBookingCardOnBookings from '../FutureBookingCardOnBookings/FutureBookingCardOnBookings';

const API = process.env.REACT_APP_API_URL;

const AllRoomsFutureBookings = ({ currentMeetingRoom, setCurrentBookingDisplaying }) => {
  const [bookings, setBookings] = useState([]);

  const handleOneBookingDetail = (booking) => {
    setCurrentBookingDisplaying(booking)
  }

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
      <div className={styles.scrollContainer}>
        <FutureBookingCardOnBookings 
          currentMeetingRoom = { currentMeetingRoom }
          bookings = { bookings }
          setCurrentBookingDisplaying = { setCurrentBookingDisplaying }
          handleClick = { handleOneBookingDetail }
        />
      </div>
    </div>
  );
};

export default AllRoomsFutureBookings;
