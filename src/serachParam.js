 // eslint-disable-next-line
import React , {useState,useEffect,useContext } from 'react' ;
import pet,{ ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './results';
import ThemeContext from './ThemeContext';




export default function  SearchParam (){


    const [location , setLocation ] = useState('Seattle ,WA');
    const [breeds , setBreeds ] = useState([]);
    const [animal , AnimalDropDown] = useDropdown("Animal" , "dog" , ANIMALS);
    const [breed , BreedDropDown , setBreed ] = useDropdown("Breed" ,"" , breeds );

    const [pets , setPets ] =  useState([]);
    const [theme, setTheme] = useContext(ThemeContext);

    //Fecth Pets wrt to input Data from Form  .
    async function getPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
          });  
          console.log("animals", animals);
      
          setPets(animals || []);
    }

   
    useEffect(()=>{
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({breeds :apiBreeds })=>{
            const breedString = apiBreeds.map(({name})=> name);
            setBreeds(breedString);
         },console.error)
    }, [animal,setBreed,setBreeds]);
    // Custome 

  
    return (
        //resreved word
        <div className = "search-params">
            <form onSubmit = {(e)=>{
                e.preventDefault();
                getPets();
            }}>
                <label> Location
                <input id = "lcoation" value = {location} 
                 placeholder="location" 
                 onChange = { e => setLocation(e.target.value)}
                 /> 
                </label>
               
                <AnimalDropDown> </AnimalDropDown>

                <BreedDropDown />


            <label htmlFor="location">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>

            </form>
            <Results pets = {pets}/>
        </div>

        );

} 

