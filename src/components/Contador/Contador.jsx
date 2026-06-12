import { useState } from "react";
import styles from "./Contador.module.css"

function Contador(){
    
    

    return(
        <>
    <p className={styles.num}> 0</p>
    <div className={styles.botao}>
        <button className={styles.reiniciar}>Reiniciar</button>
        <button className={styles.somar}>Somar</button>
        <button className={styles.subtrair}>Subtrair</button>
        <button className={styles.sortear}>Sortear</button>
    </div>
    </>
    );

}

export default Contador
