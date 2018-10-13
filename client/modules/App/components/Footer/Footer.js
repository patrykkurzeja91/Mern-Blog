import React from 'react';

// Import Style
import styles from './Footer.css';


export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2018 &middot; DESIGN PK &middot; <a href="https://portfoliosite" target="_Blank">Portfolio Site</a></p>
      <p>Created with: <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
    </div>
  );
}

export default Footer;
