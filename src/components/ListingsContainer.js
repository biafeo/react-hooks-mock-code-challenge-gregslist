import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  const deleteListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          setListings(
            listings.filter((listing) => {
              return listing.id !== id;
            })
          );
        }
      })
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    fetch("https://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  const listingCard = listings
    .filter((listing) => {
      return listing.description.toLowerCase().includes(submittedSearch);
    })
    .map(({ id, description, image, location }) => {
      return (
        <ListingCard
          key={id}
          id={id}
          description={description}
          image={image}
          location={location}
          deleteListing={() => {
            deleteListing(id);
          }}
        />
      );
    });

  return (
    <main>
      <ul className="cards">{listingCard}</ul>
    </main>
  );
}

export default ListingsContainer;
