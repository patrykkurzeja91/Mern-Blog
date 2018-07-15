import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import styles from '../About.css';

const Card2 = () => (
  // eslint-disable-next-line
  <div className={"card text-center"  + ' ' + styles['card']}>
    <div className="card-body">
      <h5 className={"card-title" + ' ' + styles['linkedin']}><FontAwesomeIcon className={styles.socialIcon} icon={['fab', 'linkedin']} /></h5>
      <h6 className="card-subtitle mb-2 text-muted">LinkedIn</h6>
      <p className="card-text">If You would like to know something about me, visit my LinkedIn page.</p>
      <a href="https://www.linkedin.com/in/patryk-kurzeja-design/" target="_blank" className={"card-link"+ ' ' + styles['linkedin-link']}>Visit page</a>
    </div>
  </div>
);

export default Card2;
