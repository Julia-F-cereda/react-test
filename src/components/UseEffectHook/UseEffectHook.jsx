import { useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css"

function UseEffectHook() {
  const [contar, setContar] = useState(0);
  const titulo = 'Clicou'

  console.log('Sempre ocorre, mas antes do useEffect')

//   quando renderiza a janela 
  useEffect(() =>{
    console.log('Ocorre quando renderizar')
  });
  
//   quando renderiza pela primera vez
  useEffect(() =>{
    console.log('Ocorre quando renderizar a primeira vez')
  }, []);

//   quando clica no botao e o contador é acionado 
    useEffect(() =>{
    console.log('Ocorre quando renderizar o contar')
  }, [contar]);

//  ele altera o titulo para o o nunero que esta contado no momento
   useEffect(() =>{
    document.title = titulo + contar
  }, []);


  return <button 
    className={styles.botao} 
    onClick={() => setContar(contar + 1)}>
    {contar}</button>
 
       


}

export default UseEffectHook