import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
import Search from './components/Search'
import './App.css'

// OMDB API Key
const API_KEY = '460437bb'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

const App = ({ title }) => { 
    
    // Set search state
    const [searchTerm, setSearchTerm] = useState('')
    // Set movies state
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchMovies('Avengers')
    }, [])

    const fetchMovies = async (title) => {
        const response = await fetch(`${API_URL}s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }


    return (
        <div className="App">
            <h1>{ title }</h1>
            <Search 
                fetchMovies={fetchMovies}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            /> 
            {movies.length !== 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard 
                            movie={movie}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )} 
        </div>
    )
}

App.defaultProps = {
    title: 'MovieLand'
}

export default App