import React from "react";
import "../styled-components/Form.css"

const Form = ({ searchPhotos, query, inputValue}) => {
  return (
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
        onChange={inputValue}
      /> 
      <button type="submit" className="button">
        Search
      </button>
      </form>
    </div>
  ) 
 }

 export default Form;