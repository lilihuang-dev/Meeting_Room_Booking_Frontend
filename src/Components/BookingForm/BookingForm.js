import { useState, useEffect } from 'react';
import isBookingDurationValid from '../../helpers/isBookingDurationValid';
import styles from "./BookingForm.module.css"

const API = process.env.REACT_APP_API_URL;

const BookingForm = ({ roomId, setFutureBookings }) => {
  const [booking, setBooking] = useState({
    meeting_name: '',
    start_date: '',
    end_date: '',
    attendee: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clearMessages = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timeoutId = setTimeout(clearMessages, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [successMessage, errorMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };


    const fetchFutureBookings = async () => {
      try {
        const response = await fetch(`${API}/meeting-rooms/${roomId}/bookings`);
        if (response.ok) {
          const data = await response.json();
          setFutureBookings(data.result);
        } else {
          console.error('Failed to fetch future bookings');
        }
      } catch (error) {
        console.error('Error fetching future bookings:', error);
      }
    };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isBookingDurationValid(booking.start_date, booking.end_date)) {
        const response = await fetch(`${API}/bookings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            room_id: roomId,
            ...booking,
          }),
        });
        const data = await response.json();
        if (response.status === 201) {
          setSuccessMessage('Booking created successfully!');
          setErrorMessage('');
          fetchFutureBookings(); 
        } else {
          setSuccessMessage('');
          setErrorMessage(data.error);
        }
      } else {
        setErrorMessage('Meeting duration should be between 15 minutes and 10 hours.');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      setSuccessMessage('');
      setErrorMessage('Server error.');
    }
  };


  return (
    <div className={styles.bookingForm}>
      <h2>Book Meeting Room</h2>
      <form onSubmit={handleSubmit} className={styles.bookingFormForm}>
        <label htmlFor="meeting_name" className={styles.bookingFormLabel}>
          Meeting Name:
        </label>
        <input
          type="text"
          id="meeting_name"
          name="meeting_name"
          value={booking.meeting_name}
          onChange={handleInputChange}
          required
          className={styles.bookingFormInput}
        />
        <br />
        <label htmlFor="start_date" className={styles.bookingFormLabel}>
          Start Date:
        </label>
        <input
          type="datetime-local"
          id="start_date"
          name="start_date"
          value={booking.start_date}
          onChange={handleInputChange}
          required
          className={styles.bookingFormInput}
        />
        <br />
        <label htmlFor="end_date" className={styles.bookingFormLabel}>
          End Date:
        </label>
        <input
          type="datetime-local"
          id="end_date"
          name="end_date"
          value={booking.end_date}
          min={booking.start_date}
          onChange={handleInputChange}
          required
          className={styles.bookingFormInput}
        />
        <br />
        <label htmlFor="attendee" className={styles.bookingFormLabel}>
          Attendees:
        </label>
        <input
          type="text"
          id="attendee"
          name="attendee"
          value={booking.attendee}
          onChange={handleInputChange}
          className={styles.bookingFormInput}
        />
        <br />
        <button type="submit" className={styles.bookingFormButton}>
          Submit
        </button>
      </form>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>

  );
};

export default BookingForm;