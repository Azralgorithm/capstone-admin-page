import './assets/css/App.css';
import './assets/css/Utilities.css';
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import OrderDirectory from './pages/OrderDirectory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Hero/> }/>
          <Route path="/orderDirectory" element={ <OrderDirectory/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
