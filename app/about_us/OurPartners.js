import styles from "./page.module.css";

const OurPartners = () => {
  return (
    <>
      <p>
        We’re proud to work side by side with some of the most trusted names in
        space and technology partnerships that help us turn bold ideas into
        unforgettable journeys.
      </p>
      <div className={styles.partnersRow}>
        <img
          className={styles.partnerLogo}
          src="/business_partners/alphabet-logo.png"
          alt="Alphabet logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/amazon_logo.png"
          alt="Amazon logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/CBC_Logo_White.png"
          alt="CBC logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/Microsoft-logo-white.png"
          alt="Microsoft logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/nyu-logo.png"
          alt="NYU logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/QueensLogo_white.png"
          alt="Queens logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/samsung-logo.png"
          alt="Samsung logo"
        />
        <img
          className={styles.partnerLogo}
          src="/business_partners/sodexo-logo.png"
          alt="Sodexo logo"
        />
      </div>
    </>
  );
};

export default OurPartners;
