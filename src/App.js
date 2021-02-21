import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Receipes from './components/Receipes'
import Axios from 'axios';

function App() {
const [search,setSearch]=useState("");
const [receipes,setReceipes]=useState([]);


const APP_ID="72b759e9";
const APP_KEY="91ca6d8205ca79ceb94a852ea8d81ad5";


useEffect(async ()=>{
getReceipes();
},[])

const getReceipes=async ()=>{
  const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  console.log(res)
  setReceipes(res.data.hits);
}

const onInputChange=(e)=>{
setSearch(e.target.value);
}

const onSearchClick=()=>{
  getReceipes();
}

  return (
    <div className="App">
     
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
      <Receipes receipes={receipes}/>
      </div>
    </div>
  );
}


export default App;
