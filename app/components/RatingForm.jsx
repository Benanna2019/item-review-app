import Stars from "./Stars";

function RatingForm() {
  return (
    <form method="post" action="/rating">
      <div className="Item_Form">
        <h2>Add a Item To Rate</h2>
        <input
          className="Description_Input"
          type="text"
          placeholder="Review Description"
          aria-label="Review Description"
          name="review"
        />
        <Stars name="rating" />
        <div className="Form_Button">
          <button type="submit">Add Item</button>
        </div>
      </div>
    </form>
  );
}

export default RatingForm;

// import { useMemo } from "react"
// import StarImage from "./StarImage";

// function RatingIcon(props) {

//   const {
//     index,
//     rating,
//     hoverRating,
//     onMouseEnter,
//     onMouseLeave,
//     onSaveRating,
//   } = props;

//   const fill = useMemo(() => {
//     if (hoverRating >= index) {
//       return '#f7ca18'
//     } else if (!hoverRating && rating >= index) {
//       return '#f7ca18'
//     }
//     return 'none';
//   }, [rating, hoverRating, index])

//   return (
//     <div
//       className="cursor-pointer"
//       onMouseEnter={() => onMouseEnter(index)}
//       onMouseLeave={() => onMouseLeave()}
//       onClick={() => onSaveRating(index)}
//     >
//       <StarImage fill={fill} />
//     </div>
//   )
// }

// export default RatingIcon
