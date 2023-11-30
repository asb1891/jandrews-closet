import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
      <div className="socials-container">
        <div className="singleCol social-icons">        
            <h1>Andrew</h1>
               <a href="http://facebook.com/AndrewScott1891">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="http://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="http://instagram.com/_blumenthal">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>         
        </div>
        <div className="singleCol social-icons">        
            <h1>Jason</h1>  
               <a href="http://facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="http://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="http://instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>                                
        </div>
      </div>
    );
  }

  
  export default Contact;