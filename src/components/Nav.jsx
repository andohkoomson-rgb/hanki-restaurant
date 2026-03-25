import { Link, NavLink } from 'react-router-dom'
import { restaurant } from '../config/restaurant.js'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="Hanki – home">
          <span className={styles.logoKo}>한끼</span>
          <span className={styles.logoEn}>Hanki</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
            <li><NavLink to="/menu" className={({ isActive }) => isActive ? styles.active : ''}>Menu</NavLink></li>
            <li>
              <a href={restaurant.delivery.wolt} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                Order via Wolt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
