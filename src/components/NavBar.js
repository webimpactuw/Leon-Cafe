import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/NavBar.css';
import DrinksMenu from '../pages/DrinksMenu';
import hamburgerIcon from '../assets/hamburger_icon.svg';
import closeIcon from '../assets/close_icon.svg';

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
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const handleMenuClick = () => {
    setIsMenuClicked(location.pathname === '/drinksmenu');
  };

  return (
    <nav>
      <div className='nav-container'>
        <NavLink to='/' className='link'>
          <img
            className='nav-logo'
            src='/img/logo.svg'
            alt='Leon Coffee House Seattle Home'
          />
        </NavLink>
        <button className='nav-icon open-icon' onClick={toggleMenu}>
          <img src={hamburgerIcon} alt='Open menu' />
        </button>
        <div className={`nav-menu ${isMenuExpanded && 'expanded'}`}>
          <button className='nav-icon close-icon' onClick={toggleMenu}>
            <img src={closeIcon} alt='Close menu' />
          </button>
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
          <div className='mobile-only'>
            <hr />
            <div className='mobile-only-location'>
              <h2>Location</h2>
              <p>1309 NE 45th St, Seattle, WA 98105</p>
            </div>
            <div className='mobile-only-hours'>
              <h2>Hours</h2>
              <p>
                <b>
                  Monday - Friday<sup>*</sup>
                </b>
              </p>
              <p> 7:30AM - 6:00PM</p>
              <p>
                <b>
                  Saturday - Sunday<sup>*</sup>
                </b>
              </p>
              <p> 8:30AM - 6:00PM</p>
            </div>
            <div className='mobile-only-footnote'>
              <p> *Check Instagram for updated hours!</p>
            </div>
          </div>
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
      </div>
      {/* <DrinksMenu isDrinksMenuClicked={isDrinksMenuClicked} />  Sorta work, but menu is appearing on top of every page */}
      {/* {location.pathname === '/drinksmenu' && <DrinksMenu isMenuClicked={isMenuClicked} />} */}
      {isMenuClicked && <DrinksMenu />}
    </nav>
  );
};

export default NavBar;
