import React from 'react'
import SearchIcon from './SearchIcon'
import SearchInput from './SearchInput'

const Search = (
    { fetchMovies, searchTerm, setSearchTerm }
) => {
  return (
    <div className='search'>
        {/* Search input */}
        <SearchInput 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        />
        {/* Search icon */}
        <SearchIcon 
            fetchMovies={fetchMovies}
            searchTerm={searchTerm}
        />
    </div>
  )
}

export default Search
