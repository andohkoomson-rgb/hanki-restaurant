import { Link } from 'react-router-dom'
import { restaurant } from '../config/restaurant.js'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroPre}>Rovaniemi, Lapland · Korean cuisine</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroKo}>한끼</span>
            <span className={styles.heroEn}>Hanki</span>
          </h1>
          <p className={styles.heroSub}>{restaurant.tagline}</p>
          <p className={styles.heroQuote}>
            &ldquo;{restaurant.nameOrigin.finnish}&rdquo;
          </p>
          <div className={styles.heroCtas}>
            <Link to="/menu" className={styles.btnPrimary}>See the menu</Link>
            <a
              href={restaurant.delivery.wolt}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Order on Wolt
            </a>
          </div>
        </div>
        <div className={styles.heroGlow} aria-hidden="true" />
      </section>

      {/* ── Name story ── */}
      <section className={styles.story}>
        <div className={`container ${styles.storyCols}`}>
          <div>
            <h4>The name</h4>
            <h2>One word. Two worlds.</h2>
            <p>
              In Korean, <em>hanki</em> (한끼) means a single meal — one complete, 
              nourishing experience. In Finnish, <em>hanki</em> describes the moment 
              the spring sun first climbs above the horizon and touches the surface of 
              the snow. Warmth breaking through a long winter.
            </p>
            <p>
              That feeling — warmth, welcome, the end of the cold — is exactly what 
              we aim to bring to every table in Rovaniemi.
            </p>
          </div>
          <div className={styles.storyStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4.9</span>
              <span className={styles.statLabel}>Google rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>#6</span>
              <span className={styles.statLabel}>of 120 in Rovaniemi</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>876+</span>
              <span className={styles.statLabel}>happy reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className={styles.highlights}>
        <div className="container">
          <h4>Why people come back</h4>
          <div className={styles.cards}>
            {[
              { title: 'Korean soul', body: 'Traditional recipes, made with care. Approved by Korean guests as the real thing — in the middle of Lapland.' },
              { title: 'Lappish twist', body: 'Local ingredients meet Korean technique. Reindeer, arctic salmon, seasonal produce — familiar and surprising.' },
              { title: 'Vegan-friendly', body: 'A full range of plant-based options, from our kimchi avocado burger to crispy tofu, without compromise.' },
              { title: 'Family run', body: 'A small team, personal service, free tea and coffee on arrival. Cosy enough for a quiet weekday lunch.' },
            ].map((card) => (
              <div key={card.title} className={styles.card}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className={styles.banner}>
        <div className="container">
          <p className={styles.bannerHours}>
            Mon–Fri&nbsp;&nbsp;11:00–20:00&nbsp;&nbsp;·&nbsp;&nbsp;Saturday&nbsp;&nbsp;13:00–20:00
          </p>
          <p className={styles.bannerAddress}>{restaurant.address}</p>
          <a href={`tel:${restaurant.phone}`} className={styles.bannerPhone}>
            {restaurant.phone}
          </a>
        </div>
      </section>

    </div>
  )
}
