import syles from "./NavBar.module.css"

import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Meeting Rooms</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/meeting-rooms/new">New Meeting Room</Link>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar