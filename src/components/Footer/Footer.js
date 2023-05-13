import styles from './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'  

import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from 'react-icons/bs'

function Footer() {
    return (
        <div>
            <section className={styles.Redes}>
                <ul className={styles.iconList}>

                    <li className={styles.iconItem}>
                        <Link to='Vacio' className={styles.iconLink}><BsInstagram /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='Vacio' className={styles.iconLink}><BsFacebook /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='Vacio' className={styles.iconLink}><BsYoutube /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='Vacio' className={styles.iconLink}><BsWhatsapp /></Link>
                    </li>

                </ul>
            </section>
        
            <div className={styles.FooterContentCopyright}>
                <p>Copyright © 2023 - Aplicación web desarrollada por 
                    <Link to='/'>
                        <button className={styles.buttonDeveloper}>
                            <strong> Kurama Impresiones 3D </strong>
                        </button>
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default Footer;