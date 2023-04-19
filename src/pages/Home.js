import '../styles/Home.css';
import '../styles/Button.css';


const Home = () => {
    return(
      <>
        <main>
        <section className="home__landing" >
          <div className='home__welcome-banner'>
            <h1> Welcome To Leon Coffee House</h1>
            <p> Family owned Mexican coffee house</p>
          </div>
        </section>


          <section className="home__about">
            <div className="home__about_text">
              <h2>About</h2>
              <p><b>Leon Coffee House is a cozy and welcoming cafe in the heart of Seattle. </b>
                We serve freshly brewed coffee, savory waffles, and delicious light bites in
                a relaxed and friendly atmosphere. Our mission is to provide a comfortable
                space for our community to gather, connect, and enjoy good food and drinks.
              </p>
            </div>
          </section>

          <section className="home__menu">
            <h2>Menu</h2>
            <p> Indulge in our scrumptious cafe menu that offers a wide variety of drinks,
                from creamy lattes to decadent affogatos, and food options that range from savory
                sandwiches to mouth-watering waffles.
            </p>
            <button>View Menu</button>
          </section>

          <section className="home__gallery">
            <button>View Gallery</button>
          </section>

          <section className="home__location">
            <div>
              <h2>Location & Hours</h2>
              <p> Monday - Friday<sup>*</sup></p>
              <p> 7:30AM - 6:00PM</p>
              <p> Saturday - Sunday<sup>*</sup></p>
              <p> 8:30AM - 6:00PM</p>
              <p> *Check Instagram for updated hours!</p>
              <p>1309 NE 45th St, Seattle, WA</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.1924538016283!2d-122.31640462325386!3d47.661257571194994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490157702be5fd5%3A0x896d80d8e8ab75f8!2sLeon%20Coffee%20House!5e0!3m2!1sen!2sus!4v1681864838145!5m2!1sen!2sus"
                    width="400"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </section>
        </main>
      </>
    )
}

export default Home;