import styles from './AllMeetingRooms.module.css';
import MeetingRoomCard from '../MeetingRoomCard/MeetingRoomCard';

function AllMeetingRooms({ meetingRooms, setCurrentMeetingRoom, setCurrentBooking }) {
  
  return (
    <div className={styles.meetingRoomsList}>
      <h1>ALL Meeting Rooms List</h1>
      {meetingRooms.map((room) => {
       return  <MeetingRoomCard 
                  key = { room.room_id } 
                  room = { room } 
                  setCurrentBooking = { setCurrentBooking }
                  setCurrentMeetingRoom = { setCurrentMeetingRoom }
                />
      })}
    </div>
  )
}

export default AllMeetingRooms