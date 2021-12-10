import React from "react";
import "../styled-components/PhotoCard.css";

const PhotoCard = ({ photos, active}) => {
  return (
    <div>
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

export default PhotoCard;