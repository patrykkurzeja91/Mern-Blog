import React from 'react';
import { Link } from 'react-router';
// import { bindActionCreators } from 'redux';
import logo from './logo.svg';
// Import Style
import styles from './Home.css';

const Home = () => (
  <div className={styles.jumbotron + ' ' + "jumbotron"}>
    <div className="container text-center">
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <h1 className="display-4 mb-4">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4 mt-4" />
      <p>Click on button below if You want to see posts list.</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg mt-4" to={'/'} href="#" role="button">Learn more</Link>
      </p>
    </div>
  </div>
);

export default Home;
