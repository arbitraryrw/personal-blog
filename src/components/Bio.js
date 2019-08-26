import React from 'react'
import styles from './Bio.module.css'
import avatar from '../imgs/avatar.jpg'

function Bio(props) {

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={avatar} alt="Me" />
      <p>
        Security person currently working at <a href="https://twitter.com/SW_Integrity">@SW_Integrity</a>. I enjoy building, breaking, and fixing things - especially games. I'm particularly interested in mobile security, both Android and iOS.
      </p>
    </div>
  )
}

export default Bio
