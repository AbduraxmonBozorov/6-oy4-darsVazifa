import React from 'react';
import styles from "./index.module.css";

function Modal() {

    document.addEventListener("click", (event)=>{
        if(event.target.id=="modal"){
            document.querySelector("#modal").style.display="none";
        }
    })

  return (
    <div className={styles.modal} id='modal'>
        <h1>Enter img url</h1>
        <input type="url" name="imgUrl" id="imgUrl" placeholder='https://hsdvchjvschjb' />
        <button onClick={()=>{
            document.querySelector("#modal").style.display="none"
        }} className={styles.close}>X</button>
    </div>
  )
}

export default Modal
