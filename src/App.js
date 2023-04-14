import React from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import FixedIcon from './components/FixedIcon/FixedIcon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pages from './components/NavMenu/Pages';
import Top from './components/Top/Top';
import Blog from './components/NavMenu/Blog';
import MegaMenu from './components/NavMenu/Megamenu';
import ShortCode from './components/NavMenu/ShortCode';
import MarketCap from './components/NavMenu/MarketCap';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Top/>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Pages/>}/>
        <Route path="/" element={<MegaMenu/>}/>
        <Route path="/" element={<Blog/>}/>
        <Route path="/" element={<MarketCap/>}/>
        <Route path="/" element={<ShortCode/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
       </Routes>
      <Footer/>
      <FixedIcon/>
     </BrowserRouter>
    </div>
  );
}

export default App;
