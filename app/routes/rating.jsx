import stylesUrl from "../styles/rating.css";
import { prisma } from "../db";
import { json, useRouteData, redirect } from "remix";
import { NavLink, Outlet } from "react-router-dom";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export async function loader() {
  let items = await prisma.item.findMany({
    include: {
      Review: true,
    },
  });

  // use the review
  return json(items, {
    Headers: {
      "Cache-Control": "max-age=60",
    },
  });
}

export async function action({ request }) {
  const req = request.clone();
  let body = new URLSearchParams(await req.text());
  console.log(body);
  await prisma.item.create({
    data: {
      itemTitle: body.get("title"),
      itemDescription: body.get("item_description"),
    },
  });
  return redirect("/rating");
}

export default function Rating() {
  let data = useRouteData();

  return (
    <div className="box">
      <h2>Top Rated Items!</h2>
      <div className="ratingsContainer">
        {data.map((item) => (
          <div className="itemContainer">
            <div>
              <NavLink to={item.id} key={item.id}>
                {item.itemTitle}
              </NavLink>
            </div>
            <div>
              <p>{item.itemDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <form method="post" action="/rating">
          <div className="Item_Form">
            <h2>Add a Item To Rate</h2>
            <input
              type="text"
              placeholder="Item Title"
              aria-label="Item Title"
              name="title"
            />
            <textarea
              type="text"
              placeholder="Describe the Item"
              aria-label="Describe the Item"
              name="item_description"
            />
            <div className="Form_Button">
              <button type="submit">Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* <p>Rating component</p>
            <div className="starContainer">
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
            <p>Rating - {rating}</p> */
}
