import React, { useState } from "react";
import { unsplash } from "./Api";
import ReactLoading from 'react-loading';
import Form from "./Form";
import PhotoCard from "./PhotoCard";
import "../styled-components/SearchPhotos.css";

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
        < Form searchPhotos={searchPhotos} query={query} inputValue={(event) => setQuery(event.target.value)} />
        <ReactLoading type={"bubbles"} className="loader" color={"#000000"} height={667} width={375} />
      </div>
    ) : (
      <div>
        <Form searchPhotos={searchPhotos} query={query} inputValue={(event) => setQuery(event.target.value)} />
        <PhotoCard photos={photos} active={active} />
      </div>
    )
}

export default SearchPhotos;