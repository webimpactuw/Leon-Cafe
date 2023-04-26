import { Link } from "react-router-dom";


const DrinksMenu = () => {

    return(
      <>
        <main>
          <section className="menu__headers">
            <ul>
              <li><Link to="/sandwichesMenu">Sandwiches</Link></li>
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