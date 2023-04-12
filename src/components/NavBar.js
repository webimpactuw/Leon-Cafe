import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <img
          src='/img/logo.svg'
          alt='Leon Coffee House Seattle home'
          width='96'
          height='96'
        />
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
          <a
            href='https://www.facebook.com/leoncoffeehouseseattle'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/img/facebook.svg' alt='Facebook' />
          </a>
          <a
            href='https://www.instagram.com/leoncoffeehouse/?hl=en'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/img/instagram.svg' alt='Instagram' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
