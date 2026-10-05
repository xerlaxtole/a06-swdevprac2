import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        className={styles.background}
        src="/images/venue-banner.jpg"
        alt="Banquet hall set with candlelit tables for an evening reception"
        fill
        sizes="100vw"
        preload
      />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <p className={styles.kicker}>Venue Explorer</p>
        <h1 className={styles.headline}>where every event finds its venue</h1>
        <p className={styles.lead}>
          Browse ballrooms, rooftop terraces, and private dining rooms across the
          city, compare capacity and catering packages, then reserve your date
          online in a few minutes.
        </p>
        <div className={styles.actions}>
          <span className={styles.primaryAction}>Explore venues</span>
          <span className={styles.secondaryAction}>Plan an event</span>
        </div>
      </div>
    </section>
  );
}
