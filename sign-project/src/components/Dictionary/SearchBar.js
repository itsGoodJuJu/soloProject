import React, {useState} from 'react'
import './Dictionary.css'

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
  }
  return (
    <>
        <label>
            <input className="search" placeholder="Search for a word" value={searchQuery} onChange={handleSearchChange}></input>
        </label>
    </>
  )
}

