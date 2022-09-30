import React from 'react'

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search for movies'
    />
  )
}

export default SearchInput
