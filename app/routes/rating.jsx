import stylesUrl from "../styles/rating.css";
import { prisma } from "../db";
import { json, useRouteData, redirect } from "remix";
import { NavLink, Outlet } from "react-router-dom";
import RatingForm from "~/components/RatingForm";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export async function loader() {
  let items = await prisma.item.findFirst({
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
  return redirect("/rating");
}

export default function Rating() {
  let data = useRouteData();
  console.log({ data });

  return (
    <div className="box">
      <h2>Leave a Review</h2>
      <div className="ratingsContainer">
        <div className="itemContainer">
          <div>
            <NavLink to={data.id} key={data.id}>
              {data.itemTitle}
            </NavLink>
          </div>
          <div>
            <p>{data.itemDescription}</p>
          </div>
        </div>
      </div>
      <div>
        <RatingForm />
      </div>
    </div>
  );
}
