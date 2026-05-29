import Alunos from "./components/Alunos/Alunos";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Lista from "./components/Lista/Lista";

function App(){

  return (
    <>
  <Alunos nome={'IVO'} idade={40} ativo={true}/>
  <Alunos nome={'ALEX'} idade={30} />
  <Alunos nome={'julia'} />
  <Button texto={'cadastro'} />
  <Button texto={'cadastro'} />
  <Card nome={'julia'} curso={'ds'} imagem={'https://placehold.co/400'}/>
  <Lista />
  </>

  );
}

export default App