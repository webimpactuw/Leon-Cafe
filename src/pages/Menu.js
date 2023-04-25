const Menu = () => {

    return(
      <>
        <main>
          <section className="menu__headers">
            <p> Drinks </p>
            <p> Sandwiches </p>
            <p> Waffles </p>
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
  
export default Menu;