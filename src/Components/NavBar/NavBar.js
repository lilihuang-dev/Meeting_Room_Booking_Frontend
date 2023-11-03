import styles from "./NavBar.module.css"

import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav>
      <ul className={styles.nav}>
        <li className = {styles.nav_item}>
          <Link to="/" className = {styles.nav_link}>
            Meeting Rooms
          </Link>
        </li>
        <li className = {styles.nav_item}>
          <Link to="/bookings" className = {styles.nav_link}>
            Bookings
          </Link>
        </li>
        <li className = {styles.nav_item}>
          <Link to="/meeting-rooms/new" className = {styles.nav_link}>
            New Meeting Room
          </Link>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar