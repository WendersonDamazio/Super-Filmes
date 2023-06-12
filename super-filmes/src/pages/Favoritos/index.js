
import { useEffect, useState } from 'react';
import './style.css'

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhalista = localStorage.getItem('@superfilmes');
        setFilmes(JSON.parse(minhalista) || [])
    }, [])

    return(
        <div>
            <h1>Tela Favoritos</h1>
        </div>
    )
}
export default Favoritos;