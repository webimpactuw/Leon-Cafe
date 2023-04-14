import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <div className='logotext-container'>
        <img src="/img/logo.svg"
             alt="2 circles with lion in the middle. The word Leon Coffee House is on the outer circle."/>
          <div className='text-container'>
            <p>&copy;	Leon Coffee House</p>
            <p> Made with &hearts; by DUBvelopers</p>
          </div>
        </div>

        <div className="social-icons">
          <a
            href='https://www.facebook.com/leoncoffeehouseseattle'
            target='_blank'
            rel='noreferrer'
          >
            <img src="/img/facebook.svg" alt="Facebook"/>
          </a>
          <a
            href='https://www.instagram.com/leoncoffeehouse/?hl=en'
            target='_blank'
            rel='noreferrer'
          >
            <img src="/img/instagram.svg" alt="Instagram"/>
          </a>
        </div>

      </div>

    </footer>
  )
};

export default Footer;