import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
      <image src="/assets/logo website white-02.png" alt="Logo" width={160} height={80} />
      </div>
      <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
          
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Home
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                Subscribe
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Shopping cart
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Articles
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Articles
              </a>
            </li>
            <li className={styles.footerListItem}>
              <input className={styles.input} type='text' placeholder='name'></input>
            </li>
            <li className={styles.footerListItem}>
            <input className={styles.input} type='email' placeholder='E-mail'></input>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Example Website. All rights reserved.
        </p>
      </div>
    </footer>
        )};

        export default Footer;