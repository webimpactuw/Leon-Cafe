import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>{/* <Route path="/" exact element={}/> */}</Routes>
    </>
  );
};

export default App;
