import '../styles/Location.css';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

const Location = () => {
  return (
    <>
      <section className='location'>
        <div className='location__hours'>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <h2>Location & Hours</h2>
          <p>
            {' '}
            Monday - Friday<sup>*</sup>
          </p>
          <p> 7:30AM - 6:00PM</p>
          <p>
            {' '}
            Saturday - Sunday<sup>*</sup>
          </p>
          <p> 8:30AM - 6:00PM</p>
          <p> *Check Instagram for updated hours!</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeIn'>
          <div className='location__address'>
            <img src='/img/locationIcon.svg' />
            <p id='address'>1309 NE 45th St, Seattle, WA</p>
          </div>
          </AnimationOnScroll>
        </div>
        <a href='https://www.google.com/maps/place/Leon+Coffee+House/@47.6612576,-122.3164046,17z/data=!3m2!4b1!5s0x5490148adbdbf163:0x8fbd44d396a8ceeb!4m6!3m5!1s0x5490157702be5fd5:0x896d80d8e8ab75f8!8m2!3d47.6612576!4d-122.3138297!16s%2Fg%2F11p781d2tf'>
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img id='locationMap' src='/img/locationMap.png' />
          </AnimationOnScroll>
        </a>
      </section>
    </>
  );
};

export default Location;
