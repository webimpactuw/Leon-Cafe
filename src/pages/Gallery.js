import Socials from '../components/Socials'
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
          <Socials className='gallery__socials'/>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
