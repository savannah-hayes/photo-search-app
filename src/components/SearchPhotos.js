import React, { useEffect, useState } from "react";
import Pagination from '@material-ui/lab/Pagination'
import { unsplash } from "./Api";
import ReactLoading from 'react-loading';
import Form from "./Form";
import PhotoCard from "./PhotoCard";
import "../styled-components/SearchPhotos.css";

const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1)
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(photos)

  const searchPhotos = async () => {
    setActive(!active)
    setIsLoading(true);
    try {
      let response = await unsplash.search.getPhotos({
        query: query,
        page: 5,
        perPage: 10,
      }).then(result => { setPhotos(result.response.results) })
      setIsLoading(false);
      return response;
      } catch (error) {
        console.log('error\n', error);
      }
    }

  const submitForm = (event) => {
    event.preventDefault()
    searchPhotos()
    setPage(1)
  }

  const changeInput = (event) => {
    setQuery(event.target.value)
  }

  const onChangePage = (value) => {
    setPage(value)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [query, page])


     return isLoading ? ( 
      <div>
        <Form searchPhotos={submitForm} query={query} inputValue={changeInput} />
        <ReactLoading type={"bubbles"} className="loader" color={"#000000"} height={667} width={375} />
      </div>
    ) : (
      <div>
        <Form searchPhotos={submitForm} query={query} inputValue={changeInput} />
        <PhotoCard photos={photos} active={active} />
      {photos.length ? (
        <Pagination
          count={10}
          page={page}
          onChange={onChangePage}
          style={ {margin: "10px"} }
        />
      ) : null}
      </div>
    )
}

export default SearchPhotos;