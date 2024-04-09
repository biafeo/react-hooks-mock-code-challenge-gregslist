import { useState } from "react";

function ListingCard({ id, description, image, location, deleteListing }) {
  const [isFavorited, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorited);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
            onClick={toggleFavorite}
            type="button"
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button type="button" className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          type="button"
          onClick={deleteListing}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
