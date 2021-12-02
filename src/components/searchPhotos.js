import React from "react";

function SearchPhotos() {
  return (
    <div>
       <form className="form"> 
        <label className="label" htmlFor="engine"> 
          {" "}
        </label>
        <input
          type="text"
          name="engine"
          className="input"
          placeholder={"Search Photos"}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPhotos;