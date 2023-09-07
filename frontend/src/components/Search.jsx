import "./Search.scss"
import React from "react"


const Search = () => {
    
    return (
    <div className="search">
        <input 
        type="text" 
        name="searchBar" 
        id="searchBar"
        placeholder="Ask to the AI..." />    
    </div>
    )
}

export default Search;