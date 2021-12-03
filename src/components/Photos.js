import React, { useState } from "react";
import { createApi } from 'unsplash-js';

const unsplash = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

function SearchPhotos() {
  const [query, setQuery] = useState("");

    const searchPhotos = async (event) => {
      event.preventDefault();
      try {
        let response = await unsplash.search.getPhotos({
        query: query
      }).then(result => { console.log(result) })
      return response;
      } catch (error) {
        console.log('error\n', error);
      }
    
    }

  return (
    <div>
       <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="search"> 
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={"Search Photos"}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPhotos;