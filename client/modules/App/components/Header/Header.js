import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
           {
            context.router.isActive('/', true)
            ? <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
            : null
          }
           {
            context.router.isActive('/about', true)
            ? <Link to="/about" ><FormattedMessage id="about" /></Link>
            : null
          }
           {
            context.router.isActive('/home', true)
            ? <Link to="/home" ><FormattedMessage id="home" /></Link>
            : null
          }
          </h1>
          {
            context.router.isActive('/', true)
              ? <button className={`${styles['add-post-button']} btn btn-primary`} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" />
                <FontAwesomeIcon className={styles.plus} icon="plus" />
              </button>
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
};

export default Header;
