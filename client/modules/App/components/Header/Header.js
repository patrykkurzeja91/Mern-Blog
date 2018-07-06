import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import 'bootstrap';
// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
            <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
          </h1>
          {
            context.router.isActive('/', true)
              ? <button className="btn btn-primary" href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></button>
              : null
          }
        </div>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
