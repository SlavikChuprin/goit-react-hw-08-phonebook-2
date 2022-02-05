import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {!isLoggedIn ? (
        <>
          <NavLink
            to="/"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Logi in
          </NavLink>
          <NavLink
            to="/registration"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Registration
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/contacts"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
