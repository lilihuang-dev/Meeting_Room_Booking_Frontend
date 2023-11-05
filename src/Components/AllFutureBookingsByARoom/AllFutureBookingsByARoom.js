import { useEffect, useState } from "react";
import FutureBookingCardByRoom from "../FutureBookingCardByRoom/FutureBookingCardByRoom";
import styles from "./AllFutureBookings.module.css"

const API = process.env.REACT_APP_API_URL;

function AllFutureBookingsByARoom( { futureBookings, setFutureBookings, roomId, setCurrentBooking }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFutureBookings = async () => {
          try {
            const response = await fetch(`${API}/meeting-rooms/${roomId}/bookings`);
            if (response.ok) {
              const data = await response.json();
              setFutureBookings(data.result);
            } 
            setLoading(false);
          } catch (error) {
            console.error('Error fetching future bookings:', error);
            setLoading(false);
          }
        };
    
        fetchFutureBookings();
      }, [roomId]);
    
      return (
        <div className={styles.allFutureBookings}>
          <h2>All Future Bookings</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            futureBookings?.length > 0 ? 
            <FutureBookingCardByRoom futureBookings = { futureBookings } setCurrentBooking = { setCurrentBooking }/> :
            'No Future Bookings for this meeting room.'
          )}
        </div>
      );
}

export default AllFutureBookingsByARoom;