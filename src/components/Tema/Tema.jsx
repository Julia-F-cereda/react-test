import { useState, useEffect } from "react"
import styles from "./Tema.module.css"
function Tema() {
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
        console.log("componente carregado pela primeira vez");
    }, []);


    //2: Executa sempre que mudar o contador
    useEffect(() => {
        console.log("O contador foi alterado para:", contador)

    }, [contador]);


    //3:Executa sempre que o tema mudar
    useEffect(() => {
        console.log("Tema alterado:", temaEscuro ? "Escuro" : "Claro")

    }, [temaEscuro]);

    //FUNÇÕES

    // Aumentar contador
    function aumentarContador() {
        setContador(contador + 1);

    }

    //Diminuir contador
    function diminuirContador() {
        setContador(contador - 1);
    }

    //Alternar tema
    function alternarTema() {
        setTemaEscuro(!temaEscuro);

    }

    return (
        <main className={`${styles.container
            } ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>

            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

            <section className={styles.card}>
                <h1>1. Contador (useState)</h1>
                <p className={styles.valor}>{contador}</p>
                <div className={styles.botoes}>
                    <button onClick={aumentarContador} >+</button>
                    <button onClick={diminuirContador} >-</button>
                </div>
                <p>O useEffect observa a variável e o <strong>contador</strong> e executa sempre que ela muda</p>
            </section>

            <section className={styles.card}>
                <h1>2. Campo de texto (useState)</h1>
                <input 
                type="text" 
                className={styles.input} 
                placeholder="Digite seu nome"
                value={nome} 
                onChange={(e) => setNome(e.target.value)}/>
                <p>Olá, <strong>{nome || "visitante"}</strong></p>
            </section>

            <section className={styles.card}>
                <h1>3. Alternância de tema (useState)</h1>
                <button className={styles.botaoTema} onClick={alternarTema}>Alternar para tema {temaEscuro ? "Claro" : "Escuro"}</button>
                <p>O useEffect observa a váriavel <strong>temaEscuro</strong> e executa sempre que o tema é alterado</p>
            </section>



        </main>
    );
}

export default Tema