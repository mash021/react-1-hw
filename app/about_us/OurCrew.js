import styles from "./page.module.css";

const OurCrew = () => {
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica...
        <br />
        <br />
        <strong>Captain Sarah Vega:</strong> A former NASA astronaut with 15+
        years of experience.
        <br />
        <br />
        <strong>Dr. Leo Redding:</strong> Chief astrophysicist and researcher.
        <br />
        <br />
        <strong>Chief Engineer Hana Lee:</strong> Aerospace engineer ensuring
        safety and innovation.
        <br />
        <br />
        <strong>Mission Specialist Alex Santos:</strong> Science & tourism
        expert for smooth journeys.
        <br />
        <br />
        <strong>Crew Member Maya Patel:</strong> Tech + customer service.
      </p>
      <div className={styles.crewImagesRow}>
        <img
          className={styles.ourCrewImage}
          src="/crew/image-anousheh-ansari.webp"
          alt="Anousheh Ansari"
        />
        <img
          className={styles.ourCrewImage}
          src="/crew/image-douglas-hurley.webp"
          alt="Douglas Hurley"
        />
        <img
          className={styles.ourCrewImage}
          src="/crew/image-mark-shuttleworth.webp"
          alt="Mark Shuttleworth"
        />
        <img
          className={styles.ourCrewImage}
          src="/crew/image-victor-glover.webp"
          alt="Victor Glover"
        />
      </div>
    </>
  );
};

export default OurCrew;
