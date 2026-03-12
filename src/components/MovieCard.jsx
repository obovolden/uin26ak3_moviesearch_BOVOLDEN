import '../style/movieCard.scss'

export default function MovieCard({movie}){

    const {Title, Poster, Year} = movie

    return(

        <article className="movieArticle">
            <h3>{Title}</h3>
            <img src={Poster} alt={Title} />
            <p>{Year}</p>
        </article>
    )
}