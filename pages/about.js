// pages/about.js (or AboutPage.jsx)
import React from 'react';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.productcontainer}>
      <h1 className={styles.aboutheading}><b>About Us</b></h1>
      <p className={styles.aboutcontent}>
        Welcome to Our Product Catalog! Learn more about who we are and what we do.
      </p>
      <p className={styles.aboutcontent}>
       This is a simple product catalog web application which fetches product details with the help of an API.
      </p>
      <p> 
       Incase of any questions/concerns, please reach out to us at <b>djawad02@gmail.com</b>.
       </p>
      </div>
    </div>
  );
};

export default AboutPage;
