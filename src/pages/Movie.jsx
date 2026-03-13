import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../style/movie.scss'

export default function Movie(){
    const {movie} = useParams()

    const [movieData, setMovieData] = useState([])

    const apiKey = import.meta.env.VITE_APP_API_KEY


    const getMovieData = async()=>{
        try{
        const response = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=${apiKey}`)
        const data = await response.json()
        setMovieData(data)
        console.log(data)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (movie) {
            getMovieData()
        }
    }, [movie])



    return(
        <main>
            <article className="movie-details">
                <img src={movieData.Poster} alt={`Bilde for ${movieData.Title}`} />
                <section className="info-container">
                    <h1>{movieData.Title}</h1>
                    <p className="year"><strong>År:</strong> {movieData.Year}</p>
                    <p><strong>Rangering:</strong> {movieData.imdbRating} / 10</p>
                    <p><strong>Sjanger:</strong> {movieData.Genre}</p>
                    <p className="plot">{movieData.Plot}</p>
                </section>
            </article>
        </main>
    )
}