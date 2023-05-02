import '../styles/About.css';

const About = () => {

    return(
      <>
        <main>
          <section className="about__our-story">
            <img src="/img/aboutLogo.png" alt="" />
            <div className="about__our-story-text">
              <img src="/img/aboutOurStory.png" alt="" />
              <div>
                <h2>Our Story</h2>
                <p>
                  Leon Coffee House was created to celebrate Latin heritage. U district was the perfect
                  place to share this culture with others. The staff love what they do.
                  Our hope is for you to enjoy Leon Coffee House as much as we do, and it is our 
                  pleasure to serve you.
                </p>
              </div>
            </div>
          </section>

          <section className="about__location-hours">
            <h2>Location & Hours</h2>
            <p> Monday - Friday<sup>*</sup></p>
            <p> 7:30AM - 6:00PM</p>
            <p> Saturday - Sunday<sup>*</sup></p>
            <p> 8:30AM - 6:00PM</p>
            <p> *Check Instagram for updated hours!</p>
            <p>1309 NE 45th St, Seattle, WA</p>
          </section>

          <section className="about_social-media">
            <h2>Social Media</h2>
            <p>Check us out on Instagram and Facebook for updated hours, new posts, and more photos!</p>

          </section>
        </main>
      </>
    )
}

export default About;