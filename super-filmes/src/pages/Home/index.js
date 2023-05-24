import { useEffect, useState} from 'react';
import api from '../../services/api';
import Filmes from '../Filmes';
// URL DA API: movie/now_playing?api_key=0417ff6e8b053516a32d921923984a60&language=pt-BR
function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('movie/now_playing',{
                params:{
                    api_key: '0417ff6e8b053516a32d921923984a60',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
        }

        loadFilmes();
    }, [])

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme)=> {
                    return(
                        <article>{filme.title}</article>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Home;