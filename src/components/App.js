import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listings => setListings(listings))
  }, [])

  function handleRemoveListing(id) {
    const filteredListings = listings.filter((listing) => listing.id !== id)
    setListings(filteredListings)
  }

  const listingsToDisplay = listings.filter((listing) => (
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <ListingsContainer 
        listings={listingsToDisplay} 
        handleRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
