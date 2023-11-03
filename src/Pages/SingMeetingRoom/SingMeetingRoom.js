import BookingForm from "../../Components/BookingForm/BookingForm"
import AllFutureBookingsByARoom from "../../Components/AllFutureBookingsByARoom/AllFutureBookingsByARoom";

function SingMeetingRoom( { currentMeetingRoom, setCurrentBooking }) {
  const { room_id } = currentMeetingRoom;
  return (
    <div>
        <div>{currentMeetingRoom.room_name}</div>
        <div>{currentMeetingRoom.capacity}</div>
        <div>{currentMeetingRoom.floor}</div>

        <hr />
        <BookingForm roomId = {room_id} />

        <hr />
        <AllFutureBookingsByARoom roomId = {room_id} setCurrentBooking = { setCurrentBooking }/>
    </div>
  )
}

export default SingMeetingRoom

