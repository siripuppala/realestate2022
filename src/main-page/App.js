import logo from '../logo.svg';
import { useEffect, useState,useMemo } from 'react';
import './App.css';
import Header from "./header"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../searchresults';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  const [allHouses,setAllHouses] =useState([]);

useEffect( () => {
                const fetchHouses = async () => { 
                  const rsp = await fetch('houses.json');
                  const houses = await rsp.json();
                  console.log(houses);
                  setAllHouses(houses);
                  };  
                fetchHouses();}
, []);
console.log(allHouses);
let featuredhouse;


//useMemo 
//memoisation

useMemo( () => { 
  if(allHouses.length){
    const randomIndex= Math.floor(Math.random()*allHouses.length);
    featuredhouse =  allHouses[randomIndex];
  }}
,
[allHouses]);




  return (
    <Router> 
    <div className="container">
       <Header subtitle='Buy a house from us, and get 20% cash back.No rush!!! ' anotherTitle='I am the twin'/>
        <HouseFilter allHouses={allHouses}/>
        <Routes>
          <Route exact path="/" element={<FeaturedHouse house={featuredhouse}  />} />
          
          <Route path="/searchresults/:country" element ={<SearchResults allHouses={allHouses} />} />
                        
          <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses} />} />             
          
        </Routes>
    
    
    
    
    </div>
   </Router>
  );
}

export default App;
