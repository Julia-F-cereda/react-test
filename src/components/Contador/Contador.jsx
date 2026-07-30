import { useState, useEffect } from "react";
import styles from "./Contador.module.css"

function Contador(){
    const [numero, setNum] = useState(0);

    //automatico
    //confere o estado do botao, se esta ou nao acionado
    const [automatico, setAutomatico] = useState(false);

    useEffect(() => {

        let relogio;

        if(automatico) {
            relogio = setInterval(() =>{
                setNum((valorAtual) => valorAtual + 1);
            }, 1000);
        }
        return () => clearInterval(relogio);
    }, [automatico]);


// muda de automatico para nao automatico
    const alternarAutomatico = () => {
        setAutomatico(!automatico);
    }

    // const reiniciar
    const reiniciar = () =>{
        setNum(0);
        setAutomatico(false);
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
        {/* o if ternario serve para, se o botao automatico estiver ativado vai aparecer um botao para parar o contador, se estiver parado aparece o de iniciar, 
        e para os estilos é a mesma logica */}
        <button className={ automatico ? styles.botaoIniciar : styles.botaoParar} onClick={alternarAutomatico}>{ automatico ? 'Parar' : 'Iniciar'}</button>
        </div>
       
    </div>
    </>
    );

}

export default Contador
