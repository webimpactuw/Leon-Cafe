import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../styles/Menu.css';


const WafflesMenu = () => {
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState("drinks");

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return(
    <>
      <main className="menu__main">
        <section className="menu__headers">
        <ul>
            <li>
              <Link to="/drinksmenu">
                {/* This is how the pink highlight is appearing when menu is clicked */}
                <span>
                  Drinks
                </span>|
              </Link>
            </li>

            <li>
              <Link to="/sandwichesmenu">
                <span>
                  Sandwiches
                </span>|
              </Link>
            </li>

            <li>
              <Link to="/wafflesmenu">
                <span 
                  className={activeMenu === "waffles" || location.pathname === '/wafflesmenu' ? "pink-bg" : ""}
                  onClick={() => handleClick("waffles")}>
                  Waffles
                </span>
              </Link>
            </li>
          </ul>
        </section>


        <section className="menu__download">
          <p> Download PDF </p>
          <img src="/img/downloadIcon.svg" />
        </section>

        <section className="menu__image">
          <img src="/img/wafflesMenu.jpg"/>
        </section>
      </main>
    </>
  )
}

export default WafflesMenu;