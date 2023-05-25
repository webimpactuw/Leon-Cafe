import { useRef } from 'react';

import Location from '../components/Location';
import HomeGallery from '../components/HomeGallery';
import '../styles/Home.css';
import '../styles/Button.css';
import chevronDown from '../assets/chevron_down.svg';
import chevronRight from '../assets/chevron_right.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

const Home = () => {
  const targetRef = useRef(null);
  const scrollDown = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // // updates animations based on screen width
  // const animationsDefault = ['animate__fadeIn', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__zoomIn']; 
  // const animationsMobile = ['animate__fadeIn', 'animate__fadeIn', 'animate__fadeIn', 'animate__fadeIn']; 
  // const [screenSize, setScreenSize] = useState(getScreenSize());
  // const [animations, setAnimations] = useState(animationsMobile);

  // useEffect(() => {
  //   const updateDimension = () => {
  //     setScreenSize(getScreenSize())
  //   }
  //   window.addEventListener('resize', updateDimension);
  //   if (screenSize.width < 1000) {
  //     setAnimations(animationsMobile);
  //   } else {
  //     setAnimations(animationsDefault);
  //   }
  //   return(() => {
  //     window.removeEventListener('resize', updateDimension);
  //   })
  // }, [screenSize])

  // function getScreenSize() {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   }
  // }

  return (
    <>
      <main className='home'>
        <section className='home__landing'>
          <div className='home__welcome-banner'>
          <AnimationOnScroll initiallyVisible={true} animateOnce={true} animateIn={'animate__fadeIn'}>
            <div className='home__welcome-text'>
              <h1 id='moveDown'> Welcome To Leon Coffee House</h1>
              <p id='moveUp'> Family-owned Mexican coffee house</p>
            </div>
            </AnimationOnScroll>
          </div>
          
          <button onClick={scrollDown}>
            <img src={chevronDown} alt='Scroll Down' />
          </button>
        </section>

        <section className='home__about-box' ref={targetRef}>
          <div className='home__about-border'>
            <div className='home__about-row'>
              <div className='home__about-column'>
                <AnimationOnScroll animateOnce={true} animatePreScroll={false} animateIn={'animate__fadeInLeft'}>
                <h2>About</h2>
                </AnimationOnScroll>
              </div>
              <div className='home__about-column'>
                <AnimationOnScroll animateOnce={true} animatePreScroll={false} animateIn={'animate__fadeInRight'}>
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
                </AnimationOnScroll>
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
            <AnimationOnScroll animateOnce={true} animatePreScroll={false} animateIn={'animate__zoomIn'}>
            <img src='/img/teddyCoffeeHome.jpg' alt='Teddy Bear Coffee' />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animatePreScroll={false} animateIn={'animate__fadeInRight'}>
              <h2>Menu</h2>
              <p>
                Indulge in our scrumptious cafe menu that offers a wide variety of
                drinks, from creamy lattes to decadent affogatos, and food options
                that range from savory sandwiches to mouth-watering waffles.
              </p>
              <div className='home__menu-viewMenu'>
                <a href='/drinksMenu'>
                  <button className='button' style={{marginTop: '10px'}}>View Menu</button>
                </a>
              </div>
            </AnimationOnScroll>
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
          <Location animation={'animate__zoomIn'}/>
        </section>
      </main>
    </>
  );
};

export default Home;
