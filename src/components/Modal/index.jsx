import React from 'react';
import styles from "./index.module.css";

function Modal() {

    document.addEventListener("click", (event)=>{
        if(event.target.className=="_modal_1vax0_1"){
            document.querySelector("._modal_1vax0_1").style.display="none";
        }
    })

  return (
    <div className={styles.modal}>
        <h1>Enter img url</h1>
        <input type="url" name="imgUrl" id="imgUrl" placeholder='https://hsdvchjvschjb' />
        <button onClick={()=>{
            document.querySelector("._modal_1vax0_1").style.display="none"
        }} className={styles.close}>X</button>
    </div>
  )
}

export default Modal
