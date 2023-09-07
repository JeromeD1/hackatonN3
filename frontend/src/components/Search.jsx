import "./Search.scss"
import React, { useState } from "react"
import { useSearchContext } from "./SearchContext"

const Search = () => {
  const { setSearch } = useSearchContext()
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSendSearch = () => {
    setSearch(inputValue)
    setInputValue("")
  }

  return (
    <div className="search">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Ask to the AI..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSendSearch}>Send</button>
    </div>
  )
}

export default Search
