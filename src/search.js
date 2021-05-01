import React from 'react'

const Search =({hadleSubmit,search,setSearch })=>{
    return (
        <form className="search-form" onSubmit={hadleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          placeholder="Search recipe ..."
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    );
}

export default Search