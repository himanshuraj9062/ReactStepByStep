import React, {useState} from 'react';
import './App.css';
import { Router } from "@reach/router";
// import Pet from './Pet';
import SearchParams from './serachParam';
import Details from "./Details";
import ThemeContext from './ThemeContext';


function App() {    
  const theme = useState('peru');
  return (
    <ThemeContext.Provider value={theme}>

        <div>
          <h1 id = "something">"Adopt Me!"</h1>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
        </ThemeContext.Provider>

        
    );
}

export default App;
