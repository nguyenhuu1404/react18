import { useRouteError } from "react-router-dom";
import Header from "./components/common/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}