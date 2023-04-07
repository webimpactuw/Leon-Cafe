import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <img src='/img/logo.svg' alt='Leon Coffee House Seattle home' />
      <ul className='nav-links'>
        <li>
          <NavLink to='/' className='link'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/menu' className='link'>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to='/gallery' className='link'>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='link'>
            About
          </NavLink>
        </li>
      </ul>
      <div className='social-icons'>
        <img src='/img/facebook.svg' alt='Facebook' />
        <img src='/img/instagram.svg' alt='Instagram' />
      </div>
    </nav>
  );
};

export default NavBar;
