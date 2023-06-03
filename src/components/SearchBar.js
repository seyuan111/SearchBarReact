import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = ({placeholder, data}) => {

    const [filteredData, setfilteredData] = useState([])

    const handleChange = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.includes(searchWord)
        })
        setfilteredData(newFilter)
    }

  return (
    <div className="searchBar">
        <div className="searchInput">
            <input type="text" placeholder={placeholder} onChange={handleChange} />
            <div className="searchIcon"><AiOutlineSearch /></div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.map((value, key) => {
                return <h1 className="peopleProfile">{value.name}</h1>
            
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar