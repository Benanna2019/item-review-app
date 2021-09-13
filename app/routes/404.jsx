import stylesUrl from "../styles/index.css";

export function meta() {
  return { title: "Ain't nothing here" };
}

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function FourOhFour() {
  return (
    <div className="Page_Container">
      <h1>404</h1>
    </div>
  );
}
