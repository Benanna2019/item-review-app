import { useState } from "react";
import { redirect, json, useRouteData } from "remix";
import { prisma } from "~/db";
import RatingIcon from "~/components/RatingIcon";
import stylesURL from "~/styles/single-rating.css";
import { Link, NavLink } from "react-router-dom";

export function links() {
  return [{ rel: "stylesheet", href: stylesURL }];
}

export async function loader({ params }) {
  console.log("these are the params", params);
  let item = await prisma.item.findUnique({
    where: {
      id: params.id,
    },
    include: {
      Review: true,
    },
  });
  // use the review
  return json(item, {
    Headers: {
      "Cache-Control": "max-age=60",
    },
  });
}

export async function action({ request, params }) {
  const req = request.clone();
  let body = new URLSearchParams(await req.text());
  await prisma.review.create({
    data: {
      reviewDescription: body.get("review"),
      stars: Number(body.get("rating")),
      item: {
        connect: {
          id: params.id,
        },
      },
    },
  });
  return redirect(`/rating/${params.id}`);
}

export default function RatingPage() {
  let data = useRouteData();

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <div className="Page_Container">
      <p>ratings</p>
      <div className="itemTitle">{data.itemTitle}</div>
      <div>
        <form method="post" action={`/rating/${data.id}`}>
          <div className="Review_Form">
            <h2 className="Review_Title">Add a Review</h2>
            <textarea
              className="Description_Input"
              type="text"
              placeholder="Review Description"
              aria-label="Review Description"
              name="review"
            />
            <input
              type="number"
              placeholder="Rating"
              aria-label="Rating"
              name="rating"
              defaultValue={rating}
              hidden
            />
            <div className="Star_Input_Container">
              {[1, 2, 3, 4, 5].map((index) => (
                <RatingIcon
                  key={index}
                  index={index}
                  rating={rating}
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSaveRating={onSaveRating}
                />
              ))}
            </div>
            <div className="Form_Button">
              <button type="submit">Add Item</button>
            </div>
          </div>
        </form>
      </div>
      <div className="Review_Grid">
        {data.Review.map((review) => (
          <div className="Item_Container">
            <div key={review.id} className="Description_Container">
              <p>{review.reviewDescription}</p>
            </div>
            <div className="Star_Container">
              {review.stars ? (
                Array.from({ length: review.stars }, (v, i) => i).map(
                  (star) => (
                    <RatingIcon key={star} index={star} rating={review.stars} />
                  )
                )
              ) : (
                <p>No Rating Given</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
