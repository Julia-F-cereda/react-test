import { useState } from "react";
import styles from "./Contador.module.css"

function Contador(){
    const [numero, setNum] = useState(0);

    // const reiniciar
    const reiniciar = () =>{
        setNum(0);
    }

    const somar = () =>{
        setNum(numero + 1)
    }

    const subtrair = () =>{
        setNum(numero - 1)
    }

    const sortear = () =>{

        setNum (Math.floor(Math.random() * (100 - 1) + 1));
    }

    

    return(
        <>
    <p className={styles.num}> {numero}</p>
    <div className={styles.botao}>
        <button className={styles.reiniciar} onClick={reiniciar}>Reiniciar</button>
        <button className={styles.somar} onClick={somar}>Somar</button>
        <button className={styles.subtrair} onClick={subtrair}>Subtrair</button>
        <button className={styles.sortear} onClick={sortear}>Sortear</button>
    </div>
    </>
    );

}

export default Contador
