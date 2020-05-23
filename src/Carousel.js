import React from 'react';

class Carousel extends React.Component {
        state = {
            photo : [],
            active: 0
        };



        static getDerivedStateFromProps({ media }) {
            let photos = ["http://placecorgi.com/600/600"];
        
            if (media.length) {
              photos = media.map(({ large }) => large);
            }
        
            return { photos };
        }

                
        handelIndexClick = event => {
            console.log("inside")
            this.setState({
              active: +event.target.dataset.index
            });
          };
        
        render (){
            const { photos , active } = this.state;
            return (
                <div className="carousel">
                  <img src={photos[active]} alt="animal" />
                  <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                      <img
                        key={photo}
                        src={photo}
                        onClick= { this.handelIndexClick }
                        data-index = {index}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                      />
                    ))}
                  </div>
                </div>
              );
            //  return (
            //      <div className = "carousel">
            //             <img src = { photos[active]} alt = "/animal" />
            //         <div className = "carousel-smaller">
            //             {photos.map((photo,ix) => {
            //                 <img 
            //                 key={photo}
            //                 onClick= { this.handelIndexClick }
            //                 data-index = {ix}
            //                 src ={photo}
            //                 className = { ix === active ? "active" : ""}
            //                 alt = "animal thumb"
            //                 />
            //             } )}
            //         </div>
            //      </div>
            //  )
        }
}

export default Carousel;