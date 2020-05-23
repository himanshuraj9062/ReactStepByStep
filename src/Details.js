import React from "react";
import pet from "@frontendmasters/pet";

// We can't use Hooks with Class Component , Class componete as about Deprecetae afer hooks got
// all the capabliteis , currnetly we can do way more thing in Class component than hooks
class Details extends  React.Component {
  // A child recives Props from its Parents
  //  this.props in Imutable 
  constructor(props){
    super(props);
    //afterwards ll do shallow  merge Object.assgin(oldState,newState)
    this.state = {
      loading : true
    }  
  }
//componentDidMount is a function that's called after the first rendering is completed
  componentDidMount() {
    //why using Arrow Funciton here
    /*
    here we have this with normal fucntion this will point  to calling context  
     (=> intestead of Arrow )when we put normal fucntion here for promise then,
     then its goining to invoke somewhere else , that might be windows .
     but if use arrow Fucntion here which we are usign than it ll wont create a new context 
     and this will be correct .
    */ 
    // pet.animal(this.props.id).then(
    //   ({animal})=> {
    //     this.setState({
    //       name: animal.name,
    //       animal: animal.type,
    //       location:  `${animal.contact.address.city},${animal.address.state}`,
    //       description: animal.description,
    //       media: animal.photos,
    //       breed : animal.breed.primary,
    //       loading :false
    //     });
    //   },console.error)

      pet.animal(this.props.id).then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      },console.error);
      // .catch(err => this.setState({ error: err }));

  }

  render () {
    if(this.state.loading){
      return <h1> loading </h1>
    }
    const { animal,breed, location, description, name} = this.state; 
    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <h2>{description}</h2>
      </div>
    );
  }

} 

export default Details;