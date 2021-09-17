import { useState } from "react";

function Stars({ name }) {
  let [stars, setStars] = useState(0);
  return (
    <>
      <input
        type="number"
        name={name}
        aria-label="Rating"
        value={stars}
        hidden
      />
      {[1, 2, 3, 4, 5].map((n) => (
        <button type="button" onClick={() => setStars(n)}>
          {stars >= n ? "★" : "☆"}
        </button>
      ))}
    </>
  );
}

export default Stars;
