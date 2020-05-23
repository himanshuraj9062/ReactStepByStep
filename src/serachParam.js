 // eslint-disable-next-line
import React , {useState,useEffect } from 'react' ;
import pet,{ ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

export default function  SearchParam (){


    const [location , setLocation ] = useState('Seattle ,   WA');
    const [breeds , setBreeds ] = useState([]);
    const [animal , AnimalDropDown] = useDropdown("Animal" , "dog" , ANIMALS);
    const [breed , BreedDropDown ] = useDropdown("Breed" ,"" , breeds );
    useEffect(()=>{
        // pet.breeds("dog").then(console.log,console.error);
        setBreeds([]);
        setBreed("");
        pet.breeds("dog").then(({breeeds})=>{
            const breedString = breeeds.map(({name})=> name);
            setBreeds(breedString);
         })
    });
    // Custome 

  
    return (
        //resreved word
        <div className = "search-params">
            <form>
                <label> Location
                <input id = "lcoation" value = {location} 
                 placeholder="location" 
                 onChange = { e => setLocation(e.target.value)}
                 /> 
                </label>
               
                <AnimalDropDown> </AnimalDropDown>

                <BreedDropDown />

            <button>Submit</button>
            </form>
        </div>

        );

} 

