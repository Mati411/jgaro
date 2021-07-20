import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img className="noMeMiresAsi" src="https://lh3.googleusercontent.com/proxy/fAZ_ajWGMS-ANU5ldVOlT6JcCghGGCkCsJX3uuhxUKud9U9cxP0wq0AXgQcnBABnxOnmIK150J4ragmxaGjMEay_BROYh0HoDpJ9YeYbiX6iPzlAAGFLYqoSwxEDurewfXlehCj1pTahh_N5EvDjWeCl-cH2" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    {/* <span className="brand-title">
      <Translate contentKey="global.title">BugTrackerJHipster</Translate>
    </span> */}
    {/* <span className="navbar-version">{appConfig.VERSION}</span> */}
  </NavbarBrand>
);

export const Home = props => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);
