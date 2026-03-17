import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mynavbar from "./navbar";
import Manali from "./components/package/manali";
import Family from "./components/package/family";
import CharDham from "./components/package/chardham";
import Weekend from "./components/package/weekend";
import AdventureTrip from "./components/package/adventure";
import DelhiTrip from "./components/package/delhi";
import { PackageProvider } from "./PackageContext";
import Home from "./home";
import Cards from "./components/cards";   
import Search from "./components/search";
import Know from "./components/know";


function App() {
  return (
    <PackageProvider>
     <Router>
  <Mynavbar />  
  <Routes>
    <Route path="/" element={<Home />} />
    
    <Route path="/Manali" element={<Manali />} />
      <Route path="/Cards" element={<Cards />} /> 
    <Route path="/Family" element={<Family />} />
    <Route path="/CharDham" element={<CharDham />} />
    <Route path="/Weekend" element={<Weekend />} />
    <Route path="/AdventureTrip" element={<AdventureTrip />} />
    <Route path="/Delhi" element={<DelhiTrip />} />
     <Route path="/Search" element={<Search />} />
     <Route path="/Know" element={<Know />} />
  </Routes>
</Router>

    </PackageProvider>
  );
}

export default App;
