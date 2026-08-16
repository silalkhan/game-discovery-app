import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  //Its nice differentaiting b/w routers and applications error
  const error = useRouteError(); //get their object
  return (
    <div>
      <NavBar />
      <div className=" text-center">
        <h1 className=" text-4xl">Oops</h1>

        <p className="">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An Unexpected error occurred."}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
