import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import '../style/home.scss'
 

export default function Home() {

    const [search, setSearch] = useState("James Bond")
    const [movie, setMovie] = useState([])

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY
    

    
    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}&`)
            const data = await response.json()
            setMovie(data.Search)

            console.log(data)
            console.log(data.Search)
        }
        catch(err){
            console.error(err);
        }
    }


    const handleChange = (e)=>{
        setSearch(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()
    }

    
    
    useEffect(() => {
        if (search)  {
        getMovies()
        }
    }, [])


    return(

        <main>
            <section className="sokefelt">
                <h1>Forside</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Søk etter film
                        <input type="search" placeholder="James Bond" onChange={handleChange} minLength={3}/>
                    </label>
                    <button className="btn" onClick={getMovies}>Søk</button>
                </form>
            </section>
            <section className="movieCards">
                {movie?.map((movie) => (<MovieCard key={movie.imdbID} movie={movie}/>))}
            </section>
        </main>
    )
}