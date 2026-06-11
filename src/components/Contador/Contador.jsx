import { useState } from "react";
import styles from  "./Contador.css"

function Contador(){
    

    return(
    <>
    <button className={styles.button}>Aumentar</button>
    <button>Dminiuir</button>
    <button>Reiniciar</button>
    </>
    )

}

export default Contador
