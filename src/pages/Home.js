import { useRef } from 'react';

import Location from '../components/Location';
import HomeGallery from '../components/HomeGallery';
import '../styles/Home.css';
import '../styles/Button.css';
import chevronDown from '../assets/chevron_down.svg';
import chevronRight from '../assets/chevron_right.svg';

const Home = () => {
  const targetRef = useRef(null);

  const scrollDown = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
          <button onClick={scrollDown}>
            <img src={chevronDown} alt='Scroll Down' />
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
          <picture>
            <source
              srcSet='/img/homeCashierMobile.jpg'
              media='(max-width: 699px)'
            />
            <source srcSet='/img/homeCashier.jpg' media='(min-width: 700px)' />
            <img src='/img/homeCashier.jpg' alt='' />
          </picture>
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
            <picture>
              <source
                srcSet='/img/homeSandwichesMobile.jpg'
                media='(max-width: 699px)'
              />
              <source
                srcSet='/img/homeSandwiches.jpg'
                media='(min-width: 700px)'
              />
              <img src='/img/homeSandwiches.jpg' alt='Sandwich with chips' />
            </picture>
            <div className='overlay'>
              <p className='photo_text'>
                Sandwiches
                <img src={chevronRight} alt='' />
              </p>
            </div>
          </a>
          <a href='/wafflesmenu'>
            <img src='/img/wafflesHome.jpg' alt='Matcha Waffles' />
            <div className='overlay'>
              <p className='photo_text'>
                Waffles
                <img src={chevronRight} alt='' />
              </p>
            </div>
          </a>
          <a href='/drinksmenu'>
            <img src='/img/coffeeHomeBrighter.jpg' alt='Latte Art' />
            <div className='overlay'>
              <p className='photo_text'>
                Drinks
                <img src={chevronRight} alt='' />
              </p>
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
