import React, { useState } from 'react';

function SearchAvailableRoomsForm({ onSearch }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [floor, setFloor] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSearch = () => {

    const searchCriteria = {
      startDate,
      endDate,
      floor: floor || null, 
      capacity: capacity || null, 
    };

    // Call the onSearch callback with the search criteria
    onSearch(searchCriteria);
  }

  return (
    <div>
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
