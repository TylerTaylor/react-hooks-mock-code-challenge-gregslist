import React, { useState } from "react";

function ListingCard({ listing, handleRemoveListing }) {
  const { id, description, location, image } = listing;
  const [favorite, setFavorite] = useState(false)

  function handleClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    handleRemoveListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
            onClick={() => setFavorite((favorite) => !favorite)} 
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button 
            onClick={() => setFavorite((favorite) => !favorite)} 
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
