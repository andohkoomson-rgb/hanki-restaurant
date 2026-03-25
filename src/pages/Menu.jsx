import { menu, restaurant } from '../config/restaurant.js'
import styles from './Menu.module.css'

function Tag({ label }) {
  return <span className={`tag tag--${label}`}>{label}</span>
}

function MenuSection({ title, items }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemHeader}>
              <span className={styles.itemName}>{item.name}</span>
              {item.price != null && (
                <span className={styles.itemPrice}>€{item.price.toFixed(2)}</span>
              )}
              {item.note && (
                <span className={styles.itemNote}>{item.note}</span>
              )}
            </div>
            {item.description && (
              <p className={styles.itemDesc}>{item.description}</p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className={styles.itemTags}>
                {item.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Menu() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h4>The menu</h4>
          <h1>Korean flavours,<br />Lappish soul</h1>
          <p>
            Our kitchen blends traditional Korean recipes with ingredients from 
            Northern Finland. Everything is made fresh, in small batches.
          </p>
          <a
            href={restaurant.delivery.wolt}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.woltLink}
          >
            Order for delivery via Wolt →
          </a>
        </header>

        <MenuSection title="Starters" items={menu.starters} />
        <MenuSection title="Mains" items={menu.mains} />
        <MenuSection title="Drinks" items={menu.drinks} />
      </div>
    </div>
  )
}
