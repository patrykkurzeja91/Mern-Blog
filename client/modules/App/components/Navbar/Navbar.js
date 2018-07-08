import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style


export function Navbar(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <a key={lang} onClick={() => props.switchLanguage(lang)} className="dropdown-item">{lang}</a>
  );
  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
      <div className={"container"}>
        <Link className="navbar-brand" to={'/home'}> Mern Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/home'}> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'}> Posts
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><FormattedMessage id="switchLanguage" /></a>
              <div className="dropdown-menu">
                {languageNodes}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

Navbar.contextTypes = {
  router: React.PropTypes.object,
};

Navbar.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Navbar;
