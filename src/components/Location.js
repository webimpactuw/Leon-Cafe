import '../styles/Location.css';

const Location = () => {
  return (
    <>
      <section className="location">
        <div className='location__hours'>
          <h2>Location & Hours</h2>
          <p> <b>Monday - Friday<sup>*</sup></b></p>
          <p> 7:30AM - 6:00PM</p>
          <p> <b>Saturday - Sunday<sup>*</sup></b></p>
          <p> 8:30AM - 6:00PM</p>
          <p> *Check Instagram for updated hours!</p>
          <div className='location__address'>
            <img src='/img/locationIcon.svg'/>
            <p>1309 NE 45th St, Seattle, WA</p>
          </div>
        </div>
        <img src="/img/locationMap.png" />
      </section>
    </>
  )
};

export default Location;