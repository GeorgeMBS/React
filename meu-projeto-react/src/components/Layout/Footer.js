import React from 'react'
import {FaAmazon, FaFacebook, FaInstagram, FaLink, FaLinkedin, FaTiktok} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer() {
 return (
    <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
            <li><FaTiktok /></li>
            <li><FaAmazon /></li>
        </ul>
        <p>Nosso Rodapé</p>
    </footer>
 )
}

export default Footer