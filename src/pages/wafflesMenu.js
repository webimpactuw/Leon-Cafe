import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import menu from "../Menu.pdf";
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
          <a href={menu} download="Menu">Download PDF</a>
          <a href={menu} download="Menu"><img src="/img/downloadIcon.svg" /></a>
        </section>

        <section className="menu__image">
          <img src="/img/wafflesMenu.png"/>
        </section>
      </main>
    </>
  )
}

export default WafflesMenu;