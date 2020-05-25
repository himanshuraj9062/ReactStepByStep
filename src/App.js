import React, {useState ,lazy,Suspense} from 'react';
import './App.css';
import { Router } from "@reach/router";
// import Pet from './Pet';
// import SearchParams from './serachParam';
import NavBar from './NavBar';

// import Details from "./Details";
import ThemeContext from './ThemeContext';
const Details = lazy( () => import('./Details') )  
const SearchParams = lazy( () => import('./serachParam') )  


function App() {    
  const theme = useState('peru');
  return (
    <ThemeContext.Provider value={theme}>

        <div>

          {/* <h1 id = "something">"Adopt Me!"</h1> */}

          <NavBar></NavBar>
          <Suspense fallback = {<h1>Loading Route</h1>}>
              <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
              </Router>
          </Suspense>
        </div>
        </ThemeContext.Provider>

        
    );
}

export default App;
