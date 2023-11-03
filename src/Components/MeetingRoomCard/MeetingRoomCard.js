import { Link } from "react-router-dom"
import styles from "./MeetingRoomCard.module.css"

function MeetingRoomCard( {room, setCurrentMeetingRoom, currentBooking}) {
    
  return (
        <Link to={`/meeting-rooms/${room.room_id}`} onClick={() => setCurrentMeetingRoom(room)}>
            <div key={room.room_id} className={styles.meetingRoomList__single}>
            <h3>{room.room_name}</h3>
            <div>👥 Capacity: {room.capacity}</div>
            <div>🏬 Floor: {room.floor}</div>
            </div>
        </Link>

  )
}

export default MeetingRoomCard