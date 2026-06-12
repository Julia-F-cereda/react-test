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

    const cores = () =>{
        if(numero > 0) return styles.valorpos
        if(numero<0) return styles.valorneg
    }

    const formatarCont = () =>{
        if(numero >= 0 && numero < 10){
            return `0${numero}`
        }
        return numero;
    }

    
// return (
//   <li className="item">
//     {isPacked ? name + ' ✅' : name}
//   </li>
// );
// Você pode ler isso como “se isPackedfor verdadeiro, então ( ?) renderize name + ' ✅', caso contrário ( :) renderize name” .
   return(
    <>
    
    <div className={styles.botao}>
        <p className={cores()}> {formatarCont()}</p>
        <div className={styles.bot}>
        <button className={styles.reiniciar} onClick={reiniciar}>Reiniciar</button>
        <button className={styles.somar} onClick={somar}>Somar</button>
        <button className={styles.subtrair} onClick={subtrair}>Subtrair</button>
        <button className={styles.sortear} onClick={sortear}>Sortear</button>
        </div>
       
    </div>
    </>
    );

}

export default Contador
