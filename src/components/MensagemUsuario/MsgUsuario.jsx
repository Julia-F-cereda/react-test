import styles from "./MsgUsuario.module.css"

function MsgUsuario({autenticado=false, nomeUsuario}){
    // return(autenticado == true ? <p className={styles.aut}>Bem vindo,{nomeUsuario}</p> : <p className={styles.naoAut}>Usuário não encontrado!</p>);
    
    const msgAut = <p className={styles.aut}>Bem vindo,{nomeUsuario}</p>;
    const msgNaoAut = <p className={styles.naoAut}>Usuário não encontrado!</p>;
    return(
        autenticado == true ? msgAut : msgNaoAut
    );
    
}

export default MsgUsuario