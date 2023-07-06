
import { useEffect, useState } from 'react';
import './style.css'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhalista = localStorage.getItem('@superfilmes');
        setFilmes(JSON.parse(minhalista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) =>{
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@superfilmes', JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!!")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhm filme salvo</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favoritos;