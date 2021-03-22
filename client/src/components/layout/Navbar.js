import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import StyledNavbar from '../styled_components/StyledNavbar';
import StyledUl from '../styled_components/StyledUl';
import StyledLink from '../styled_components/StyledLink';
import AuthContext from '../../context/Auth/AuthContext';
import EntryContext from '../../context/Entry/EntryContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const entryContext = useContext(EntryContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearEntries } = entryContext;

  const onLogout = () => {
    logout();
    clearEntries();
  };

  const authLinks = (
    <Fragment>
      <p className='hello'>Hello {user && user.name}</p>
      <StyledLink to='/#' onClick={onLogout}>
        <i className='fas fa-sign-out-alt'></i>
        <span className='hide-sm'> Logout</span>
      </StyledLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <StyledLink to='/register'>Register</StyledLink>
      <StyledLink to='/login'>Login</StyledLink>
    </Fragment>
  );

  return (
    <StyledNavbar>
      <StyledLink to='/'>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </StyledLink>
      <StyledUl>{isAuthenticated ? authLinks : guestLinks}</StyledUl>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Money Tracking App',
  icon: 'fas fa-money-check-alt',
};
export default Navbar;
