import { useState, useEffect, useRef } from 'react';

import Location from '../components/Location';
import HomeGallery from '../components/HomeGallery';
import '../styles/Home.css';
import '../styles/Button.css';
import chevron from '../assets/chevron_down.svg';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const targetRef = useRef(null);

  const scrollDown = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <main className='home'>
        <section className='home__landing'>
          <div className='home__welcome-banner'>
            <div className='home__welcome-text'>
              <h1 id='moveDown'> Welcome To Leon Coffee House</h1>
              <p id='moveUp'> Family-owned Mexican coffee house</p>
            </div>
          </div>
          <button class={`${isMobile && 'visible'}`} onClick={scrollDown}>
            <img src={chevron} alt='Scroll Down' />
          </button>
        </section>

        <section className='home__about-box' ref={targetRef}>
          <div className='home__about-border'>
            <div className='home__about-row'>
              <div className='home__about-column'>
                <h2>About</h2>
              </div>
              <div className='home__about-column'>
                <p>
                  <b>
                    Leon Coffee House is a cozy and welcoming cafe in the heart
                    of Seattle.{' '}
                  </b>
                  We serve freshly brewed coffee, savory waffles, and delicious
                  light bites in a relaxed and friendly atmosphere. Our mission
                  is to provide a comfortable space for our community to gather,
                  connect, and enjoy good food and drinks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='home__image-banner'>
          <img src='/img/homeCashier.jpg' alt='' />
        </section>

        <section className='home__menu'>
          <div className='home__menu-row'>
            <img src='/img/teddyCoffeeHome.jpg' alt='Teddy Bear Coffee' />
            <h2>Menu</h2>
            <p>
              Indulge in our scrumptious cafe menu that offers a wide variety of
              drinks, from creamy lattes to decadent affogatos, and food options
              that range from savory sandwiches to mouth-watering waffles.
            </p>
            <a href='/drinksMenu'>
              <button className='button'>View Menu</button>
            </a>
          </div>
        </section>

        <section className='home__photos'>
          <a href='/sandwichesmenu'>
            <img src='/img/homeSandwiches.png' alt='Sandwich with chips' />
            <div className='overlay'>
              <p className='photo_text'>SANDWICHES</p>
            </div>
          </a>
          <a href='/wafflesmenu'>
            <img src='/img/wafflesHome.jpg' alt='Matcha Waffles' />
            <div className='overlay'>
              <p className='photo_text'>WAFFLES</p>
            </div>
          </a>
          <a href='/drinksmenu'>
            <img src='/img/coffeeHomeBrighter.jpg' alt='Latte Art' />
            <div className='overlay'>
              <p className='photo_text'>DRINKS</p>
            </div>
          </a>
        </section>

        <section className='home__gallery'>
          <h2>Gallery</h2>
          <HomeGallery />
          <a href='/gallery'>
            <button className='button'>View Gallery</button>
          </a>
        </section>

        <section className='home__location'>
          <Location />
        </section>
      </main>
    </>
  );
};

export default Home;
