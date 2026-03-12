import { Link } from 'react-router-dom'
import '../style/layout.scss'

export default function Layout({ children }){
    return (
        <>
        <header>
            <h1>Filmbibliotek</h1>
            <nav className="main-nav">
                <Link to="/">Hjem</Link>
            </nav>
        </header>

        {children}

        <footer>
            <p>Arbeidskrav 3</p>
        </footer>
        </>
    )
}
