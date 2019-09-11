import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from '@fortawesome/fontawesome-svg-core'

import {
 faLinkedin,
 faInstagram,
 faGithubSquare,
 faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faKey, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

library.add(
 faLinkedin,
 faInstagram,
 faGithubSquare,
 faTwitterSquare,
 faEnvelope,
 faKey,
 faMapMarkerAlt
);

config.autoAddCss = false

 class SocialMediaIcons extends Component {
   render() {
    return (
     <div className="social-icons">


        <ul style = {socialMediaStyle} >
          <li style = {listItemStyle}>
            <a style = {{color:"grey"}} href="https://twitter.com/arbitraryrw" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" width="1.8rem" />
            </a>
          </li>
          <li  style = {listItemStyle}>
            <a style = {{color:"grey"}} href="https://github.com/arbitraryrw" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" width="1.8rem" />
            </a>
          </li>
          <li  style = {listItemStyle}>
            <a style = {{color:"grey"}} href="https://www.linkedin.com/in/nikola-cucakovic-623aa677/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" width="1.8rem"  />
            </a>
          </li>
          {/*<li  style = {listItemStyle}>
            <a style = {{color:"grey"}}href="https://www.instagram.com/nikapotomus/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>*/}
        </ul>

        <p style = {{color:"grey"}} >
          <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" width="0.7rem" />
          &nbsp;London, UK
        </p>

      </div>

    )
  }
 }

 const listItemStyle = {
    marginRight:"20px",
    float: "left"
 }

 const socialMediaStyle = {
   marginTop: "10px",
   marginBottom: "0",
   padding:"0px",
   listStyle:"none",
   // background: '#333',
   listStyleType: "none",
   display:"flex"
 }

 export default SocialMediaIcons;
