import React from 'react';
import styles from "./index.module.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header>
        <nav>
            <a href="#"><img src={logo} className="logoImg" alt="LOGO" /></a>
            <ul className="nav-link">
                <li className="link-item"><a className="link" href="#">vakansiyalar</a></li>
                <li className="link-item"><a className="link" href="#">kandidatlar</a></li>
                <li className="link-item"><a className="link" href="#">kompaniyalar</a></li>
                <li className="link-item"><a className="link" href="#">xizmatlar</a></li>
                <li className="link-item"><a className="link" href="#">ta'lim</a></li>
            </ul>
            <div>
                <select name="lang" id="lang">
                    <option value="O'zb">O'zb</option>
                    <option value="Rus">Rus</option>
                    <option value="Ing">Ing</option>
                </select>
                <button className="boshlash">boshlash</button>
            </div>
        </nav>  
    </header>
    </>
  )
}

export default Header
