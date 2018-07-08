import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.header}>About me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veniam consectetur, provident necessitatibus facere consequatur eum nam ipsam mollitia. Quam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate placeat vero aliquid recusandae. Reiciendis nesciunt quos porro pariatur laudantium ipsam, asperiores aut quidem fugit minus facere blanditiis doloribus quisquam.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
