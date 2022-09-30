import React from 'react'

// Import search icon
import searchIcon from '../search.svg'

const SearchIcon = ({ fetchMovies, searchTerm }) => {
  return (
    <img 
        src={searchIcon}
        alt="search"
        onClick={() => fetchMovies(searchTerm)}
        
    />
  )
}

export default SearchIcon
