import { useState, useEffect} from "react"
import styles from "./Tema.module.css"
function Tema(){
    // CASO DE ESTADOS

    // 1: Contador
    const [contador, setContador] = useState(0);

    // 2: Texto usuario
    const [nome, setNome] = useState("");

    //3: Tema
    const [temaEscuro, setTemaEscuro] = useState(false);

    //CASOS DE USEEFFECT

    //1: Executa uma vez ao carregar o componente
    useEffect(() => {

    }, []);


    //2: Executa sempre que mudra o contador
      useEffect(() => {

    }, [contador]);


    //3:Executa sempre que o tema mudar
      useEffect(() => {

    }, [temaEscuro]);

    //FUNÇÕES

    // Aumentar contador
    function aumentarContador(){
        setContador(contador + 1)

    }

    //Diminuir contador
    function diminuirContador(){
        setContador(contador - 1)
    }

    //Alternar tema
    function alternarTema(){

    }

    return(
    <main 
        className={`${
            styles.container
        } ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}
    >
        <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

        






    </main>

        
    );
}

export default Tema