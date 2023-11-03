import { useState } from 'react';
import { isBookingDurationValid } from "./isBookingDurationValid";

const API = process.env.REACT_APP_API_URL;

const BookingForm = ({ roomId }) => {
  const [booking, setBooking] = useState({
    meeting_name: '',
    start_date: '',
    end_date: '',
    attendees: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
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
        const data = await response.json()
        console.log(data.result)
        if (response.status === 201) {
          setSuccessMessage('Booking created successfully!');
          setErrorMessage('');
          
          // Notify the parent component that a booking has been created
          // onBookingCreated();
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
    <div>
      <h2>Book Meeting Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meeting_name">Meeting Name:</label>
        <input
          type="text"
          id="meeting_name"
          name="meeting_name"
          value={booking.meeting_name}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="start_date">Start Date:</label>
        <input
          type="datetime-local"
          id="start_date"
          name="start_date"
          value={booking.start_date}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="end_date">End Date:</label>
        <input
          type="datetime-local"
          id="end_date"
          name="end_date"
          value={booking.end_date}
          min={booking.start_date}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="attendees">Attendees:</label>
        <input
          type="text"
          id="attendees"
          name="attendees"
          value={booking.attendees}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default BookingForm;
