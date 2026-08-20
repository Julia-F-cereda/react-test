import { useState, useEffect } from "react";
import Produto from "./Produto";
function Consulta(){

    const [produto, setProduto] = useState(null);

    //inserir o prod no localstorage
    useEffect(() => {

        const produtoLocal = localStorage.getItem('produto');
        if (produtoLocal !== 'null') setProduto(produtoLocal);

    }, []);

    //recupera o produto do localstorage quanod o produto for modificado
    useEffect(() => {

        if (produto !== null) localStorage.setItem('produto', produto);

    }, [produto]);

    //extrai o texto do botao quanod o usuario lcica
    function handleClick({ target }){
        setProduto(target.innerText);
    }

    return(
        <section>
            <h1>Preferencia: {produto}</h1>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <button onClick={handleClick}>Camera</button>
            <button onClick={handleClick}>smartwatch</button>

            <Produto produto={produto}/>
  
        </section>
    )
}

export default Consulta

