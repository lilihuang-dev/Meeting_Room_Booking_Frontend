import { useState } from 'react';
import styles from "./SearchAvailableRoomsForm.module.css"

const API = process.env.REACT_APP_API_URL;

function SearchAvailableRoomsForm({ onSearch }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [floor, setFloor] = useState('');
  const [capacity, setCapacity] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async() => {

    const searchCriteria = {
      startDate,
      endDate,
      floor: floor || null, 
      capacity: capacity || null, 
    };

    try {
      const response = await fetch(`${API}/meeting-rooms/?start_date=${startDate}&end_date=${endDate}&floor=${floor}&capacity=${capacity}`);
      if (response.ok) {
        const data = await response.json();
        onSearch(data.result);
        setError(null);
      } else {
        const errorMessage = response.statusText
        setError(errorMessage);
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Network or other error:', error.message);
      setError(error.message);
    }
  }

  return (
    <div className={styles.searchForm}>
      <h1>Search for Available Meeting Rooms</h1>
      <form>
        <div>
          <label>Start Date:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Floor : </label>
          <input
            type="number"
            placeholder="0-28"
            min="0"
            max="28"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
        </div>
        <div>
          <label>Capacity : </label>
          <input
            type="number"
            placeholder="0-200"
            min="0"
            max="200"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSearch}>
          Find 
        </button>
      </form>
    </div>
  );
}

export default SearchAvailableRoomsForm;
