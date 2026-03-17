import React from "react";
import Slider from './components/slider';
import Search from './components/search';
import Cards from './components/cards';
import Footer from './footer';

function Home() {
  return (
    <div className="home">
      <Slider/>
      <Search/>
      <Cards/>
      <Footer/>
    </div>
  );
}
export default Home;