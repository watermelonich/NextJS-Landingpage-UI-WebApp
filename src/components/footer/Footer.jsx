import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nich</div>
      <div className={styles.text}>
        Nich Creative Thoughts Agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
