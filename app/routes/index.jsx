import { useMemo, useState }  from "react";
import { Form, useRouteData } from "remix";
import Rating from "./rating";
import { Link, Outlet } from "react-router-dom";
import stylesUrl from "../styles/index.css";

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
}

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

// export function loader() {
//   return { message: "this is awesome 😎" };
// }

export default function Index() {
 
  let data = useRouteData();

  return (
    <div className="Page_Container">
      <h1 style={{ textAlign: "center" }}>Welcome to the Gumroad Challenge built with Remix!</h1>  
      <section>
      <p>
      This challenge has been a lot of fun for me. I have gotten to use Remix, Prisma, and Postgres which I have been wanting to explore since buying a license.
      </p>
      <p>
        I want to provide Gumroad with reasons I believe it should choose Remix as its React framework over other frameworks like Nextjs. Below is a the short version for why Remix and Prisma is my recommendation for Gumroad moving forward while migrating to React. 
      </p>

      <h2>Benefits of Remix & Prisma</h2>
      <h4>Remix</h4>
      <p>
        Remix's tagline is "Build Better Websites". Here are the short and sweet bullet points of what this means and how Remix gets out of the way.
      </p>
      <p>
        <li>Remix is a web framework that relies on the web fetch api.</li> 
        <li>Uses the primitives that React provides use.</li>
        <li>Removes React that gets in the way.</li>
        <li>Uses React Router for fetching data based off layouts</li>
        <li>Don't have to keep track of pending states</li>
        <li>And much, much more.</li>
      </p>
      <p>
        As a reference, the longest part of building this app was the react parts. The stars and fill was done with react and took me the longest which was proably 3 hours just to figure out how to render this one component dynamically. 
      </p>
      <p>
        The whole app took me about 10hrs and the majority of that was giving to layout out the app and syling. Data fetching and mutation, which was done in prisma, took about an hour to get everything set up. Its amazing. 
      </p>
      <h4>Prisma</h4>
      <p>
        Prisma for any sql database is so incredibly nice and refreshing to use. Here are some of the benefits. 
      </p>
      <p>
        <li>Everything is typed so you get that benefit when trying to fetch and mutate data as well as in error handling.</li>
        <li>You can provide Prisma with a mysql database connection string and it will auto generate your schema's based off of your database using <code>npx prisma db pull</code></li>
        <li>Then run <code>npx prisma generate</code> and you will get your updated prisma schema.</li>
        <li>With PrismaClient, all you have to do to get reviews from a review table is <code>await prisma.review.findMany()</code>. You can pass an object of items into the findMany function to return specifics.</li>
        <li>The above benefit is nice because with Remix, you get the benefits of web fetch api, with Request, Params, etc and you can pass those into your Remix's loader or actions functions which can then be used by prisma.</li>
      </p>
      <p><strong>Summary: 
        <blockquote>
          <em>
            Remix and Prisma would make Gumroad's migration to React easier with a lot less 'refactoring' and more 'developing'.
          </em>
        </blockquote>
        </strong>
      </p>
      </section>

      <section style={{ marginTop: "5rem" }}>
      <h2>My Learning To Code Journey</h2>
      <h3>Learning React</h3>
      <p>
        I have been coding for right at a year. I went the traditional route of HTML, CSS, and Javascript. After learning those three in my coding bootcamp, we went on to React. 
      </p>
      <p>
        The goal of a bootcamp is to teach the practical skills necessary for someone to be skilled enought to find a job in the new career field they are exploring. React is a wildly popular framework that businesses use and so learing it is a no brainger. 
      </p>
      <p>
        While we were learning to code, we kept hearing about React and we were incredibly excited to learn it. But this is where it became confusing for us and where I would like to introduce something called...
      </p>
      <h4>"The Curse of React", <em>as coined by Ryan Florence</em></h4>
      <p>
        Now react is great, but in Ryan Florence's words from an egghead.io podcast, 
        <blockquote>
        "React makes building a UI so simple that you end up doing it wrong cause you don't rely on a 3rd party thing. And before React, when we just had jquery, it was way to hard to do yourself and so you use a 3rd party library. And so what would happen is the 3rd partly library has already been through the scree-reader issues, the head-pointer issues, the keyboard issues, and the mouse issues, and the mobile issues, all those things. And so they have made this thing accessible. Most people did not grab jquery auto-complete for the accessiblility. They grabbed it because it was just to hard to do on their own."
        </blockquote>
      </p>
      <p>
        Ryan continues by saying, 
        <blockquote>
        "So React kinda crossed this line for use where now anyone can build an autocomplete, even a super-beginner in React, and, you-know, its an input, an onChange, and a setState. That's it. As your typing, change some state, and then you are going to filter a list and show it and maybe make a fetch to get that list. Its so easy that you never reach for a third party library and so now you are missing all that accessiblility from what we used to get."
        </blockquote>
      </p>
      <p>
        We knew that React was supposed to be great. But we were not using React for what it was built for which was to make building UI's incredibly powerful and easy. We were instantly trying to use it with data, which anyone can tell you that using vanilla React to manage server state and ui state is quite the feat. 
      </p>
      <p>
        So React became this odd thing that we knew we should like but was incredibly difficult to use and we knew that this should not be the case. 
      </p>
      <h4>Enter Remix</h4>
      <p>
        This is where remix.run answered came to the rescue for me. A year after learning React, I started learning Remix and I can confidently say this, Remix is React as it should be. 
      </p>
      <p>
        While using Remix, I have had that peculiar joy that comes every so often in a developers 'developing'. I began coding because I loved the type of work it was and Remix has brought a bit of that refreshment to me. 
      </p>
      <p>
        Gumroad will not go wrong with choosing Remix if it so chooses. If React is what Gumroad is 100% set on, Remix is the obvious choice. 
      </p>
      <p>
        Sincerely, 
      </p>
      <p>
        <em>Benjamin Patton</em>
      </p>
      </section>
      <footer>
        <p>Built w/ Remix Run 😎</p>
      </footer>
    </div>
  );
}

