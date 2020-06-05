import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={s.navigation}>
        <li>
          <NavLink
            className={s.navigation__link}
            activeClassName={s.navigation__link_active}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.navigation__link}
            activeClassName={s.navigation__link_active}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
