import { useState } from "react";
import styles from "./ConsultaApiBtn.module.css";
import Swal from 'sweetalert2'

export default function ConsultaApiBtn() {
    const [usuarios, setUsuarios] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState("")

    async function buscarUsuarios() {
        // resetamos os estados
        setCarregando(true);
        setErro("");


        try {

            // consulta de API com metodo FETCH
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(resposta)

            // se a respota for diferente de ok, ele vem pra ca, se nao ele cotinua 
            if (!resposta.ok) {
                // tratar erro interno
                if (resposta.status === 500) {
                    throw new Error("Erro 500: O banco de dados ou servidor falhou.")
                }

                //tratar erro de falta de autenticação
                if (resposta.status === 401) {
                    throw new Error("Erro 401: Usuário não autorizado");
                }

                //tratar erro HTTP do servidor
                throw new Error(`Erro ${resposta.status}: URL não encontrada ou inválida.`);

            }
            // Coverte os dados ara json
            const dados = await resposta.json();
            setUsuarios(dados);
        }
        catch (error) {
            console.log(error.message)

            // tratar falhas de rede
            if (error.message === "Failed to fetch" || !navigator.onLine) {
                setErro("Não foi possivel conectar a servidor. Verifique sua internet.");

                // se o fetch falhar por culpa do servidor, cai no else e atualiza p estado e manda uma mensagem.
                // se falhar por falta de internet no if ele exibe msg offiline
            }

            else {
                setErro(error.message)
            }

        }
        finally {
            

            setCarregando(false)
        }
    }
    return (
        <main className={styles.container}>

            <h1 className={styles.titulo}>Consulta de API</h1>

            <section className={styles.card}>

                <button
                    className={styles.buscarButton}
                    onClick={buscarUsuarios}
                    disabled={carregando}>
                    {carregando ? "Buscando..." : "Consultar"}Consultar</button>

                <h2>Usuários da JSON Placeholder</h2>

                {carregando && <p>Carregando usuários...</p>}
                {erro && <p className={styles.erro}>{erro}</p>}
                {!carregando && !erro && (
                    <ul className={styles.lista}>
                        {usuarios.map((usuario) => (
                            <li key={usuario.id} className={styles.item}>
                                <h3>{usuario.name}</h3>

                                <p>
                                    <strong>E-mail:</strong> {usuario.email}
                                </p>

                                <p>
                                    <strong>Cidade:</strong> {usuario.address.city}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );

}
