import styles from "./page.module.css";

const crewMembers = [
  {
    name: "Captain Sarah Vega",
    description: "A former NASA astronaut with 15+ years of experience.",
  },
  {
    name: "Dr. Leo Redding",
    description: "Chief astrophysicist and researcher.",
  },
  {
    name: "Chief Engineer Hana Lee",
    description: "Aerospace engineer ensuring safety and innovation.",
  },
  {
    name: "Mission Specialist Alex Santos",
    description: "Science & tourism expert for smooth journeys.",
  },
  {
    name: "Crew Member Maya Patel",
    description: "Tech + customer service.",
  },
];

const OurCrew = () => {
  return (
    <section className={styles.ourCrewSection}>
      <p className={styles.introText}>
        Our crew is the heart and soul of Galactica...
      </p>

      <div className={styles.crewList}>
        {crewMembers.map((member, index) => (
          <div key={index} className={styles.crewMember}>
            <strong>{member.name}:</strong> <span>{member.description}</span>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default OurCrew;
