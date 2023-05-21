import Socials from '../components/Socials';
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <section className='gallery'>
      <h1>Gallery</h1>
      <div className='gallery__grid'>
        <img className='item-1' src='/img/flowerGallery.jpg' alt='' />
        <img className='item-2' src='/img/heartGallery.jpg' alt='' />
        <img className='item-3' src='/img/galleryFront.png' alt='' />
        <img className='item-4' src='/img/galleryCoffee.png' alt='' />
        <img className='item-5' src='/img/galleryUmbrella.png' alt='' />
        <img className='item-6' src='/img/galleryStairs.png' alt='' />

        <div className='item-7'>
          <Socials />
          <div className='mobile-only'>
            <img
              src='/img/instagram.svg'
              alt='Instagram'
              width='64'
              height='64'
            />
            <div>
              <p>Check out our Instagram for more photos!</p>
              <p>@leoncoffeehouse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
