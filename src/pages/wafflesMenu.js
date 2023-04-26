const wafflesMenu = () => {

    return(
      <>
        <main>
          <section className="menu__headers">
            <p> <a href="drinksMenu.js">Drinks </a> </p>
            <p> <a href="sandwichesMenu.js">Sandwiches </a> </p>
            <p> Waffles </p>
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

export default wafflesMenu;