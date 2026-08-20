import { useState, useEffect } from "react";


const Produto = ({ produto }) => {
    const [consulta, setConsulta] = useState(null);

   useEffect(() => {

    async function buscarConsulta(){
        if (produto !== null){
    const dados = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${produto}`);


    const resposta = await dados.json();
    setConsulta(resposta);
    }
}

buscarConsulta();
   }, [produto]);

   if (consulta === null) return null;

   return(
    <div>
        <h1>{consulta.nome}</h1>
        <p>R${consulta.preco}</p>
    </div>
   );
};

export default Produto;



