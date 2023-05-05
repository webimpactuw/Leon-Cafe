import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/NavBar.css';
import DrinksMenu from '../pages/DrinksMenu';

const NavBar = () => {
  // const [isDrinksMenuClicked, setIsDrinksMenuClicked] = useState(false);

  // const handleMenuClick = () => {
  //   setIsDrinksMenuClicked(true);
  // };

  // const [isMenuClicked, setIsMenuClicked] = useState(false);
  // const location = useLocation();

  // const handleMenuClick = () => {
  //   setIsMenuClicked(true);
  // };

  const location = useLocation();
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(location.pathname === '/drinksmenu');
  };

  return (
    <nav>
      <div className='nav-container'>
        <NavLink to='/' className='link'>
          <img src='/img/logo.svg' alt='Leon Coffee House Seattle Home' />
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink to='/' className='link'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/drinksmenu'
              className='link'
              onClick={handleMenuClick}
            >
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
      {/* <DrinksMenu isDrinksMenuClicked={isDrinksMenuClicked} />  Sorta work, but menu is appearing on top of every page */}
      {/* {location.pathname === '/drinksmenu' && <DrinksMenu isMenuClicked={isMenuClicked} />} */}
      {isMenuClicked && <DrinksMenu />}
    </nav>
  );
};

export default NavBar;
