import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import useSWR from "swr";
import { fetcher } from "../services/fetcher";


const Writers = () => {
     const { data, error } = useSWR('https://writers-backend-app.herokuapp.com/api/profile', fetcher);
    return ( 
    <div className="sm:my-2 md:my-4  lg:my-4 sm:mx-10 md:mx-20  lg:mx-40">
      
    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
    
    >   
        
        
            {
            
              data &&
              data.map(writer => (<WriterItem
                key={writer.id}
                name={writer.name} 
                age = {writer.age} 
                gender = {writer.gender}              
                className="m-10"  
                           
              >
 
              </WriterItem>
              
              
            )) 
            }



        
    </Carousel>
    
    </div>
     );
}
 
export default Writers ;


const WriterItem = ({key,name,age,gender}) => {
    
    return ( 
        <div className="py-5 " >
          

        <div key={key}>
          <img src={require("../images/images.png")} className="carousel-image" />
          <div className="myCarousel grid grid-row gap-4 px-72">
            <h3>{name}</h3>
            <h3>{age} years</h3>
            <h3 className="font-bold">{gender} </h3>
            
        </div>
          
        </div>

 

            

          

        </div>
     );

    }