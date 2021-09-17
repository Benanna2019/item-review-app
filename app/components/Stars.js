import { useState } from "react";

function Stars() {
  let [stars, setStars] = useState(0);
  return (
    <>
      <input type="hidden" name="stars" value={stars} />
      {[1, 2, 3, 4, 5].map((n) => (
        <button type="button" onClick={() => setStars(n)}>
          {stars >= n ? "★" : "☆"}
        </button>
      ))}
    </>
  );
}

export default Stars;
