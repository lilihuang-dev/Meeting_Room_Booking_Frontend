import React from 'react'

function FutureBookingCardByRoom( { futureBookings, setCurrentBooking }) {

  return (
    <div>
        <ul>
            {futureBookings.map((booking) => (
            <div key={booking.id} onClick={() => setCurrentBooking(booking)}>
                attendee? -  {booking.meeting_name}
                <div>Start: {booking.start_date} </div>
                <div>End: {booking.end_date}</div>
            </div>
            ))}
            </ul>
    </div>
  )
}

export default FutureBookingCardByRoom;