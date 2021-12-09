import React, { useState } from "react";
import { unsplash } from "./Api"
import ReactLoading from 'react-loading';
import "../styled-components/Photos.css";

function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchPhotos = async (event) => {
    event.preventDefault();
    setActive(!active)
    setIsLoading(true);
    try {
      let response = await unsplash.search.getPhotos({
        query: query,
        page: 1,
        perPage: 50
      }).then(result => { setPhotos(result.response.results) })
      setIsLoading(false);
      return response;
      } catch (error) {
        console.log('error\n', error);
      }
    }

     return isLoading ? ( 
       <div>
        <form className="form" onSubmit={ searchPhotos } autoComplete="off"> 
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
      
      <ReactLoading type={"bubbles"} className="loader" color={"#000000"} height={667} width={375} />
      </div>
    ) : (
      <div>
        <form className="form" onSubmit={ searchPhotos } autoComplete="off"> 
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

      {(() => {
        if(photos.length === 0) {
          return (
            <div className="wrapper">
              <h2 className={active ? "message active" : "message"}>Please search for a valid photo</h2>
            </div>
          )
        } 
        return (
        <div className="cards">
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
        )
      })()}
    </div>
    )
}

export default SearchPhotos;