import React from 'react'

export const SearchForm = ({
  handleSubmit,
  searchTerms,
  setSearchTerms,
  itemsSelectedOption,
  setItemsSelectedOption
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Terms to search"
        name="searchTerms"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <select
        value={itemsSelectedOption}
        name="itemsSelectedOption"
        onChange={(e) => setItemsSelectedOption(e.target.value)}
      >
        <option value="ALL">All</option>
        <option value="TODOS">Todos</option>
        <option value="JOURNAL">Journal</option>
      </select>
      <button>Search</button>
    </form>
  )
}
