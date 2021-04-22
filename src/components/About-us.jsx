import React from 'react';
import AboutUsImg from '../images/about-us.png';

const About =()=>{
    return (
        <>
         <div className="About-us-area">
         <div className="container d-flex">
             <div className="about-us-content-left">
              <img src={AboutUsImg} alt="BannerImg"/>
             </div>
             <div className="about-us-content-right">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum perspiciatis fugiat magni sint accusamus vero quod id quas reiciendis rem expedita, sunt velit amet, aliquid repudiandae quis ea? Ullam quia accusantium possimus distinctio odio nostrum deserunt alias, quam aliquam quas!</p>
             </div>
            </div> 
             
         </div>
        </>
    )
       
    
}

export default About;