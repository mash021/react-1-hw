import styles from "./page.module.css";

const values = [
  {
    number: "01",
    title: "Love your craft.",
    text: "We’re here because we love what we do. It’s our passion, hobby, career, and vocation. We’re looking for others who feel the same way.",
  },
  {
    number: "02",
    title: "Be bold. Be humble.",
    text: "There is no top-down. We lead from the bottom and the edges. Everyone drives. We celebrate ideas over egos, where the best idea wins, regardless of who or where it comes from.",
  },
  {
    number: "03",
    title: "Be better. Always push forward.",
    text: "We’re on a tireless pursuit to become better and expect those around us to do the same.",
  },
  {
    number: "04",
    title: "Be a Professional",
    text: "There’s important work to be done. Speak up. Be present. Provide value, with honesty and candour.",
  },
];

const OurValues = () => {
  return (
    <section className={styles.ourValuesSection}>
      <h2 className={styles.sectionLabel}>OUR VALUES</h2>
      <h1 className={styles.sectionTitle}>Rules to Live By</h1>

      <div className={styles.grid}>
        {values.map((value) => (
          <div className={styles.card} key={value.number}>
            <div className={styles.cardNumber}>{value.number}</div>
            <div className={styles.cardTitle}>{value.title}</div>
            <div className={styles.cardText}>{value.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
