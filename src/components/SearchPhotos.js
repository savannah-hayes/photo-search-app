import React, { useEffect, useState } from "react";
import Pagination from '@material-ui/lab/Pagination'
import unsplash from "./Api";
import Loader from "./Loader";
import Form from "./Form";
import PhotoCard from "./PhotoCard";
import "../styled-components/SearchPhotos.css";

const SearchPhotos = () => {
  const [term, setTerm] = useState("");
  const [query, setQuery] = useState("coffee");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1)
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchPhotos = async () => {
    setActive(true)
    setIsLoading(true);
    try {
      const response = await unsplash.get('/search/photos', {
        params: {
          query: query,
          page: page,
          per_page: 20,
        }
      }) 
      setPhotos(response.data.results);
      setIsLoading(false);
      } catch (error) {
        console.log('error\n', error);
      }
    }

  const submitForm = (event) => {
    event.preventDefault()
    setQuery(term)
    setTerm("")
    setPage(1)
  }

  const changeInput = (event) => {
    setTerm(event.target.value)
  }

  const changePage = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    searchPhotos()
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [query, page])


    return isLoading ? ( 
      <div>
        <Form searchPhotos={submitForm} query={term} inputValue={changeInput} />
        <Loader />
      </div>
    ) : (
      <div>
        <Form searchPhotos={submitForm} query={term} inputValue={changeInput} />
        <PhotoCard photos={photos} active={active} />
      {photos.length ? (
        <Pagination
          count={20}
          page={page}
          onChange={changePage}
          style={ {margin: "10px"} }
        />
      ) : null}
      </div>
    )
}

export default SearchPhotos;