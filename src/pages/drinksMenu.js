import { Link } from "react-router-dom";
import { useState } from "react"; 
import '../styles/Menu.css';

const DrinksMenu = () => {
  const [background, setBackground] = useState('transparent');
  const handleClick = () => {
    setBackground(prevBackground => prevBackground === 'transparent' ? 'pink' : 'transparent');
  }

    return(
      <>
        <main className="menu__main">
          <section className="menu__headers">
            <ul>
              <li onClick={handleClick} style={{backgroundColor: background}}><Link to="/drinksmenu"><span>Drinks</span>|</Link></li>
              <li><Link to="/sandwichesmenu"><span>Sandwiches</span>|</Link></li>
              <li><Link to="/wafflesmenu"><span>Waffles</span></Link></li>
            </ul>
          </section>

          <section className="menu__download">
            <p> Download PDF </p>
            <img src="/img/downloadIcon.svg" />
          </section>

          <section className="menu__image">
            <img src="/img/drinksMenu1.jpg"/>
            <img src="/img/drinksMenu2.jpg"/>
          </section>
        </main>
      </>
    )
}
  
export default DrinksMenu;