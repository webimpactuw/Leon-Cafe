import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import DrinksMenu from './pages/DrinksMenu';
import Gallery from './pages/Gallery';
import SandwichesMenu from './pages/SandwichesMenu';
import WafflesMenu from './pages/WafflesMenu';
import Footer from './components/Footer';

const App = () => {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/drinksmenu' element={<DrinksMenu />} />
        <Route path='/sandwichesmenu' element={<SandwichesMenu />} />
        <Route path='/wafflesmenu' element={<WafflesMenu />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
