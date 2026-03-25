import { restaurant } from '../config/restaurant.js'
import styles from './Footer.module.css'

export default function Footer() {
  const { name, address, phone, social, hours } = restaurant

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.name}>한끼 Hanki</span>
          <p className={styles.tagline}>Korean flavours, Lappish soul</p>
        </div>

        <div className={styles.info}>
          <h4>Visit Us</h4>
          <p>{address}</p>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>

        <div className={styles.info}>
          <h4>Hours</h4>
          <p>{hours.weekdays.label}: {hours.weekdays.open}–{hours.weekdays.close}</p>
          <p>{hours.saturday.label}: {hours.saturday.open}–{hours.saturday.close}</p>
          <p className={styles.closed}>Sunday: Closed</p>
        </div>

        <div className={styles.info}>
          <h4>Follow</h4>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {name} Restaurant, Rovaniemi</span>
      </div>
    </footer>
  )
}
