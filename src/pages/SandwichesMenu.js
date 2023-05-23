import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import menu from '../Menu.pdf';
import '../styles/Menu.css';

const SandwichesMenu = () => {
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState('drinks');

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <main className='menu'>
        <h1 className='visually-hidden'>Sandwiches Menu</h1>
        <section className='menu__headers'>
          <ul>
            <li>
              <Link to='/drinksmenu'>
                <span>Drinks</span>|
              </Link>
            </li>

            <li>
              <Link to='/sandwichesmenu'>
                <span
                  className={
                    activeMenu === 'sandwiches' ||
                    location.pathname === '/sandwichesmenu'
                      ? 'pink-bg'
                      : ''
                  }
                  onClick={() => handleClick('sandwiches')}
                >
                  Sandwiches
                </span>
                |
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
            <img src='/img/downloadIcon.svg' alt='Download sandwiches menu' />
          </a>
        </section>

        <section className='menu__image'>
          <img src='/img/sandwichesMenu.png' alt='' width='654' height='925' />
        </section>
      </main>
    </>
  );
};

export default SandwichesMenu;
