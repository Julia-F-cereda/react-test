import { useState } from "react"

function UseStateHook(){
    const [nome, setNome] = useState('Clique em mudar.');
    const [idade, setIdade] = useState(0);
    const [eFalso, seteFalso] = useState(true);
    const [fruta, setFruta] = useState();

    const atualizarNome = () =>{
        setNome('Ivo');
    }

    const atualizarIdade = () =>{
        setIdade(idade + 1)
    }

    const verificarEstado = () =>{
        seteFalso(!eFalso);
    }

    const mostrarFuta = () =>{
        setFruta('Morango');
    }

    return(
        <div>
            <p>Nome: {nome}</p>
            <button onClick={atualizarNome}>Mudar</button>

            <p>Idade: {idade}</p>
            <button onClick={atualizarIdade}>Mudar</button> 

            <p>É falso: {eFalso ?'NÃO':'SIM'}</p>
            <button onClick={verificarEstado}>Mudar</button> 

            <p>Fruta: {fruta}</p>
            <button onClick={mostrarFuta}>Fruta secreta</button>
    
        </div>
    )
}

export default UseStateHook