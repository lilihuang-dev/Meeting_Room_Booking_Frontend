import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import convertTimeformat from '../../helpers/convertDateToDisplay';

const API = process.env.REACT_APP_API_URL;

const SingleBooking = ({ currentBookingDisplaying }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCancelBooking = () => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this booking?');

    if (confirmCancel) {
      fetch(`${API}/bookings/${currentBookingDisplaying.booking_id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setSuccessMessage('Booking canceled successfully');
            navigate(`/Bookings`)
          } else {
            throw new Error('Failed to cancel booking');
          }
        })
        .catch((error) => {
          console.error('Error canceling booking:', error);
          setErrorMessage('Failed to cancel booking');
        });
    }
  };

  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Meeting Name:</strong> 
        {currentBookingDisplaying.meeting_name}
      </p>
      <p>⏳ Start Date: {convertTimeformat(currentBookingDisplaying.start_date)}</p>
      <p>⏳ End Date: {convertTimeformat(currentBookingDisplaying.end_date)}</p>
      <p>🏬  Floor: {currentBookingDisplaying.booking_room_floor}</p>

      <button onClick={handleCancelBooking}>Cancel Booking</button>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SingleBooking;

