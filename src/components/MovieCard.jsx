import '../style/movieCard.scss'

export default function MovieCard({movie}){

    const {Title, Poster, Year} = movie

    return(

        <article className="movieArticle">
            <img src={Poster} alt={Title} />
            <section className="info">
                <h3>{Title}</h3>
                <p>{Year}</p>
            </section>
        </article>
    )
}