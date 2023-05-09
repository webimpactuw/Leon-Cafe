import Location from '../components/Location';
import Socials from '../components/Socials';
import '../styles/About.css';

const About = () => {
  return (
    <>
      <main className='about'>
        <h1 className='visually-hidden'>About</h1>
        <section className='about__our-story'>
          <img src='/img/aboutLogo.png' alt='' />
          <div className='about__our-story-text'>
            <img src='/img/aboutOurStory.png' alt='' />
            <div>
              <h2>Our Story</h2>
              <p>
                Leon Coffee House was created to
                <span> celebrate Latin heritage</span>. U District was the
                perfect place to share this culture with others. The staff love
                what they do.
              </p>
              <p>
                Our hope is for you to enjoy Leon Coffee House as much as we do,
                and it is our pleasure to serve you.
              </p>
            </div>
          </div>
        </section>

        <section className='about__location'>
          <Location />
        </section>

        <section className='about__social-media'>
          <div className='about__social-media-text'>
            <h2>Social Media</h2>
            <p>
              Check us out on Instagram and Facebook for updated hours, new
              posts, and more photos!
            </p>
          </div>
          <Socials />
        </section>
      </main>
    </>
  );
};

export default About;
