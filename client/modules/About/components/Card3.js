import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import styles from '../About.css';

const Card3 = () => (
  // eslint-disable-next-line
  <div className={"card text-center" + ' ' + styles['card']}>
    <div className="card-body">
      <h5 className={"card-title" + ' ' + styles['instagram']}> 
        <FontAwesomeIcon className={styles.socialIcon} icon={['fab', 'instagram'] } />
      </h5>
      <h6 className="card-subtitle mb-2 text-muted">Instagram</h6>
      <p className="card-text">My private account. Follow me to see my content!</p>
      <a href="https://www.instagram.com/patrykkurzeja/" target="_blank" className={"card-link"+ ' ' + styles['instagram-link']}>Follow</a>
    </div>
  </div>
);

export default Card3;
