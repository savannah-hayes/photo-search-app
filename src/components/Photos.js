import React, { useState } from "react";
import { unsplash } from "./Api"
import "../styled-components/Photos.css";

function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isActive, setActive] = useState("false");

    const searchPhotos = async (event) => {
      event.preventDefault();
      setActive(!isActive);
      try {
        let response = await unsplash.search.getPhotos({
        query: query,
        page: 1,
        perPage: 50
      }).then(result => { setPhotos(result.response.results) })
      return response;
      } catch (error) {
        console.log('error\n', error);
      }
    }

  return (
    <div>
       <form className="form" onSubmit={ searchPhotos } > 
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

      <div className={`cards ${isActive ? "" : "active"}`}>
        {photos.map((photo) => (
            <div className="card" key={photo.id}>
              <img
                className="card-image"
                alt={photo.alt_description}
                src={photo.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}{" "}
      </div>
    </div>
  );
}

export default SearchPhotos;