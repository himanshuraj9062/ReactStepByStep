import React from 'react';
import './App.css';
import { Router } from "@reach/router";
// import Pet from './Pet';
import SearchParams from './serachParam';
import Details from "./Details";
function App() {    

  return (
        <div>
          <h1 id = "something">"Adopt Me!"</h1>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
        
    );
}

export default App;
