import './header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Super Filmes</Link>
            <Link className='favoritos' to='/favotitos'>Super Filmes</Link>
        </header>
    )
}

export default Header;