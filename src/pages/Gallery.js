import '../styles/Gallery.css'

const Gallery = () => {
    return(
      <section className="gallery">
      <h1>Gallery</h1>
      <div className="gallery__grid">
        <img src="/img/flowerGallery.jpg" alt="" />
        <img src="/img/heartGallery.jpg" alt="" />

        <article className="gallery__socials">
          <div>
            <img src='/img/instagram.svg' alt='Instagram' width='64' height='64'/>
            <div>
                <p>@leoncoffeehouse</p>
                <p>Follow and tag us on Instagram!</p>
                <p>#leoncoffeehouse</p>
            </div>
          </div>
          <div>
            <img src='/img/facebook.svg' alt='Facebook' width='64' height='64'/>
            <div>
                <p>@leoncoffeehouseseattle</p>
                <p>Like us on Facebook!</p>
            </div>
          </div>
        </article>
      </div>
      </section>
    )
}
  
export default Gallery;