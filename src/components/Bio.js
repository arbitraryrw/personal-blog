import React from 'react'
import styles from './Bio.module.css'
import avatar from '../imgs/avatar.jpg'
import { Link } from 'react-navi'

function Bio(props) {

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={avatar} alt="Me" />
      <p>
        My name is Nikola Cucakovic, I'm a security engineer. I enjoy building, breaking, and fixing things - especially games. I'm particularly interested in mobile security, both Android and iOS.
        To find out more go to <Link href='./about'>about me</Link>.
      </p>
      
      
    </div>
  )
}

export default Bio
