import React from 'react';
import styles from "./index.module.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header>
        <nav>
            <a href="#"><img src={logo} className={styles.logoImg} alt="LOGO" /></a>
            <ul className="nav-link">
                <li className={styles["link-item"]}><a className={styles.link} href="#">vakansiyalar</a></li>
                <li className={styles["link-item"]}><a className={styles.link} href="#">kandidatlar</a></li>
                <li className={styles["link-item"]}><a className={styles.link} href="#">kompaniyalar</a></li>
                <li className={styles["link-item"]}><a className={styles.link} href="#">xizmatlar</a></li>
                <li className={styles["link-item"]}><a className={styles.link} href="#">ta'lim</a></li>
            </ul>
            <div>
                <select name="lang" id="lang">
                    <option value="O'zb">O'zb</option>
                    <option value="Rus">Rus</option>
                    <option value="Ing">Ing</option>
                </select>
                <button className={styles.boshlash}>boshlash</button>
            </div>
        </nav>  
    </header>
    </>
  )
}

export default Header
