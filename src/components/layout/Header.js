import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Header(props) {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          {brand}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i
                  className="fas fa-home"
                  style={{ cursor: 'pointer', fontSize: '15px' }}
                />{' '}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <i
                  className="fas fa-question"
                  style={{ cursor: 'pointer', fontSize: '15px' }}
                />{' '}
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i
                  className="fas fa-plus"
                  style={{ cursor: 'pointer', fontSize: '15px' }}
                />{' '}
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Header.propTypes = {
  brand: PropTypes.string.isRequired
};
Header.defaultProps = {
  brand: 'My App'
};
