import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import styles from '../About.css';

const Card1 = () => (
  // eslint-disable-next-line
  <div className={"card text-center"  + ' ' + styles['card']}>
    <div className="card-body">
      <h5 className={"card-title" + ' ' + styles['github']}><FontAwesomeIcon icon={['fab', 'github']} /></h5>
      <h6 className="card-subtitle mb-2 text-muted">Github profile</h6>
      <p className="card-text">Check out my portfolio at Github.com. Some basic html, CSS and JavaScript works.</p>
      <a href="https://github.com/patraspan" target="_blank" className={"card-link"+ ' ' + styles['github-link']}>Go to repo</a>
    </div>
  </div>
);

export default Card1;
