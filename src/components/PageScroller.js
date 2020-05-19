import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

import styles from './PageScroller.module.css'

class PageScroller extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.target.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

   render() {
    return (
     <div>
      <button  onClick={ this.handleClick }>

        <FontAwesomeIcon className={styles.blob} icon={faChevronDown} size="2x" width="1.8rem"  />
        
      </button>
     </div>
    )
  }

 }


 export default PageScroller;
