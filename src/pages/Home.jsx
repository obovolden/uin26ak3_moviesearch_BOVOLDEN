import { useState } from "react"

export default function Home() {

    const [search, setSearch] = useState()

    const baseUrl = `http://www.omdbapi.com/?s=${search}`
    const apiKey = `&apikey=d6b15841`
    // const baseUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=d6b15841`
    
    
    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}&`)
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
        
    }

    

    return(
        <main>
            <h1>Forside</h1>
            <form>
                <label>
                    Søk etter film
                    <input type="search" placeholder="harry potter" onChange={handleChange}/>
                </label>
            </form>
            <button onClick={getMovies}>Søk</button>
        </main>
    )
}