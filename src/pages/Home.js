import Location from '../components/Location';
import '../styles/Home.css';
import '../styles/Button.css';

const Home = () => {
    return(
      <>
        <main>
        <section className="home__landing" >
          <div className='home__welcome-banner' id="moveUp">
            <div className='home__welcome-text'>
              <h1 id="moveDown"> Welcome To Leon Coffee House</h1>
              <p id="moveUp"> Family owned Mexican coffee house</p>
            </div>
          </div>
        </section>

          <section className="home__about-box">
            <div className='home__about-border'>
              <div className="home__about-row">
                <div className='home__about-column'>
                  <h2>About</h2>
                </div>
                <div className='home__about-column'>
                  <p><b>Leon Coffee House is a cozy and welcoming cafe in the heart of Seattle. </b>
                    We serve freshly brewed coffee, savory waffles, and delicious light bites in
                    a relaxed and friendly atmosphere. Our mission is to provide a comfortable
                    space for our community to gather, connect, and enjoy good food and drinks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='home__image-banner'>
            <img src="/img/homeCashier.jpg" alt=""/>
          </section>

          <section className="home__menu">
            <div className="home__menu-row">
              <img src="/img/teddyCoffeeHome.jpg" alt="Teddy Bear Coffee"/>
              <div className='home__menu-column'>
                <h2>Menu</h2>
                <p> Indulge in our scrumptious cafe menu that offers a wide variety of drinks,
                    from creamy lattes to decadent affogatos, and food options that range from savory
                    sandwiches to mouth-watering waffles.
                </p>
                <a href='/drinksMenu'>
                  <button>View Menu</button>
                </a>
              </div>
            </div>
          </section>

          <section className="home__photos">
            <div className="row">
              <div className="column">
              <a className="photo_link" href="/sandwichesmenu">
                <img src="/img/homeSandwiches.png" alt="Matcha Waffles" />
                <h2 className="photo_text">SANDWICHES</h2>
              </a>
              </div>
              <div className="column">
              <a className="photo_link" href="/wafflesmenu">
                <img src="/img/wafflesHome.jpg" alt="Matcha Waffles" />
                <h2 className="photo_text">WAFFLES</h2>
              </a>
              </div>
              <div className="column">
              <a className="photo_link" href="/drinksmenu">
                <img src="/img/coffeeHomeBrighter.jpg" alt="Latte Art" />
                <h2 className="photo_text">DRINKS</h2>
              </a>
              </div>
            </div>
          </section>

          <section className="home__gallery">
            <h2>Gallery</h2>
            <img src="/img/rainbow-stairs.jpg" alt="Rainbow Staircase"/>
            <a href='/gallery'>
              <button>View Gallery</button>
            </a>
          </section>

          <section className="home__location">
            <Location />
          </section>
        </main>
      </>
    )
}

export default Home;