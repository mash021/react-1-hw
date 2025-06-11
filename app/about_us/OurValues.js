import styles from "./page.module.css";

const OurValues = () => {
  return (
    <>
      <p>
        <strong>Exploration:</strong> We are driven by a deep-seated desire to
        explore the unknown. We believe that the pursuit of discovery is at the
        heart of human nature, and we are committed to pushing the boundaries of
        what is possible.
        <br />
        <br />
        <strong>Innovation:</strong> At Galactica, we prioritize cutting-edge
        technology and innovation. We are constantly evolving our spacecraft,
        safety protocols, and services to ensure that our travelers experience
        the most advanced and secure space journeys available.
        <br />
        <br />
        <strong>Sustainability:</strong> We are committed to making space
        exploration sustainable for future generations.
        <br />
        <br />
        <strong>Community:</strong> Our journeys are about building a community
        of space enthusiasts who share a passion for the stars.
      </p>
      <img
        className={styles.ourValuesImage}
        src="/data/inspiration_about_us/our_values.png"
        alt="our values and ideas"
      />
    </>
  );
};

export default OurValues;
