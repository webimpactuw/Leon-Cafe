import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <section className='gallery'>
      <h1>Gallery</h1>
      <div className='gallery__grid'>
        <img className='item-1' src='/img/flowerGallery.jpg' alt='' />
        <img className='item-2' src='/img/heartGallery.jpg' alt='' />

        {/* TODO: change placeholder images */}

        <img className='item-3' src='/img/teddyCoffeeHome.jpg' alt='' />
        <img className='item-4' src='/img/teddyCoffeeHome.jpg' alt='' />
        <img className='item-5' src='/img/teddyCoffeeHome.jpg' alt='' />
        <img className='item-6' src='/img/teddyCoffeeHome.jpg' alt='' />

        <div className='gallery__container item-7'>
          <article className='gallery__socials'>
            <div>
              <img
                src='/img/instagram.svg'
                alt='Instagram'
                width='64'
                height='64'
              />
              <div>
                <p>@leoncoffeehouse</p>
                <p>Follow and tag us on Instagram!</p>
                <p>#leoncoffeehouse</p>
              </div>
            </div>
            <div>
              <img
                src='/img/facebook.svg'
                alt='Facebook'
                width='64'
                height='64'
              />
              <div>
                <p>@leoncoffeehouseseattle</p>
                <p>Like us on Facebook!</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
