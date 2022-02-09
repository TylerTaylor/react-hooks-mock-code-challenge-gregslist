import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleRemoveListing }) {

  const displayListings = listings.map((listing) => (
    <ListingCard 
      key={listing.id}
      listing={listing}
      handleRemoveListing={handleRemoveListing}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
