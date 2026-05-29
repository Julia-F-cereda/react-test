import styles from "./card.module.css"

function Card({nome, curso, imagem}){
    return(
    <>
        <div className={styles.card}>
            <img src={imagem} />
            <h1 className={styles.titulo}>nome:{nome}</h1>
            <p className={styles.curso}>curso:{curso}</p>

        </div>
    </>
    );
}

export default Card