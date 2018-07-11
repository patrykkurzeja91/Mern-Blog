import React from 'react';
import Carousel from './components/Carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import styles from './About.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

const About = () => (
  <div>
    <Carousel />
    <div className={styles['cards-wrapper']}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <Card1 />
            </div>
          </div>
          <div className="col-sm">
            <Card2 />
          </div>
          <div className="col-sm">
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
