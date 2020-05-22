import React from 'react';
import { render } from 'react-dom';
// import {Pet} from './Pet';


const App = () => {

  return React.createElement("div", {}, 
//variable varity => accepts as many input as possible for craete element in form of an Array 
    [    

    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement("h1", {}, "Adopt Me!"),

    // React.createElement(Pet, {
    //   name: "Luna",
    //   animal: "Dog",
    //   breed: "Havanese"
    // }),

    // React.createElement(Pet, {
    //   name: "Pepper",
    //   animal: "Bird",
    //   breed: "Cockatiel"
    // }),

    // React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })

  ]);
};

render(React.createElement(App), document.getElementById("root"));

export default App;
