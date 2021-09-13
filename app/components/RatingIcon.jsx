import { useMemo } from "react"
import StarImage from "./StarImage";

function RatingIcon(props) {

  const {
    index, 
    rating, 
    hoverRating, 
    onMouseEnter, 
    onMouseLeave, 
    onSaveRating,
  } = props; 

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return '#f7ca18'
    } else if (!hoverRating && rating >= index) {
      return '#f7ca18'
    }
    return 'none'; 
  }, [rating, hoverRating, index])

  return (
    <div 
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)} 
      onMouseLeave={() => onMouseLeave()} 
      onClick={() => onSaveRating(index)}
    >
      <StarImage fill={fill} /> 
    </div>
  )
}

export default RatingIcon