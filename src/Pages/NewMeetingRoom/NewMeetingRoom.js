import styles from './NewMeetingRoom.module.css';
import { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

function NewMeetingRoom({ onCreateMeetingRoom }) {
  const [roomName, setRoomName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [floor, setFloor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateMeetingRoom = () => {
    if (!roomName || !capacity || !floor) {
      setErrorMessage('Name, Capacity, and Floor are required.');
      return;
    } 

    const meetingRoomInfo = {
      room_name: roomName,
      capacity: capacity,
      floor: floor,
    };

    fetch(`${API}/meeting-rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetingRoomInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to create meeting room');
        }
      })
      .then((data) => {
        setSuccessMessage('Meeting room created successfully!');
        onCreateMeetingRoom(data.result);
      })
      .catch((error) => {
        setErrorMessage('Error creating meeting room: ' + error.message);
      });
    

    setRoomName('');
    setCapacity('');
    setFloor('');
  }

  return (
    <div>
      <h2 className={styles.newMeetingRoomTitle}>Create a New Meeting Room</h2>
      <form>
        <div>
          <label>Room Name:</label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Floor:</label>
          <input
            type="number"
            value={floor}
            placeholder="0-28"
            min="0"
            max="28"
            onChange={(e) => setFloor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Capacity:</label>
          <input
            type="number"
            value={capacity}
            placeholder="0-200"
            min="0"
            max="200"
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleCreateMeetingRoom}>
          Submit
        </button>
      </form>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default NewMeetingRoom;
