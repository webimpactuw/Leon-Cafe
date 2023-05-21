import '../styles/Socials.css';
const Socials = () => {
  return (
    <div className='socials-container'>
      <article className='socials-block'>
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
          <img src='/img/facebook.svg' alt='Facebook' width='64' height='64' />
          <div>
            <p>@leoncoffeehouseseattle</p>
            <p>Like us on Facebook!</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Socials;
