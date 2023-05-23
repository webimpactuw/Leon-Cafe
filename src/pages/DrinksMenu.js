import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import menu from '../Menu.pdf';
import '../styles/Menu.css';

const DrinksMenu = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('drinks');

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <main className='menu'>
        <h1 className='visually-hidden'>Drinks Menu</h1>
        <section className='menu__headers'>
          <ul>
            <li>
              <Link to='/drinksmenu'>
                <span
                  className={
                    activeMenu === 'drinks' ||
                    location.pathname === '/drinksmenu'
                      ? 'pink-bg'
                      : ''
                  }
                  onClick={() => handleClick('drinks')}
                >
                  Drinks
                </span>
                |
              </Link>
            </li>

            <li>
              <Link to='/sandwichesmenu'>
                <span>Sandwiches</span>|
              </Link>
            </li>

            <li>
              <Link to='/wafflesmenu'>
                <span>Waffles</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className='menu__download'>
          <a href={menu} download='Menu'>
            Download PDF
          </a>
          <a href={menu} download='Menu'>
            <img src='/img/downloadIcon.svg' alt='Download drinksmenu' />
          </a>
        </section>

        <section className='menu__image'>
          <img src='/img/drinksMenu1.jpg' alt='' width='654' height='925' />
          <img src='/img/drinksMenu2.png' alt='' width='654' height='925' />
        </section>
      </main>
    </>
  );
};

export default DrinksMenu;
