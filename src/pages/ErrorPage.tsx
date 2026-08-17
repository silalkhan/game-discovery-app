import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  // Get the error object from React Router
  const error = useRouteError();

  // Differentiate between a React Router error
  // and an unexpected application error
  const isRouterError = isRouteErrorResponse(error);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-white">
      <NavBar />

      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          {/* Error Status */}
          <p className="mb-3 text-7xl font-extrabold text-blue-600">
            {isRouterError ? error.status : "500"}
          </p>

          {/* Heading */}
          <h1 className="mb-3 text-3xl font-bold">
            {isRouterError ? "Page Not Found" : "Something Went Wrong"}
          </h1>

          {/* Message */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {isRouterError
              ? "The page you are looking for does not exist."
              : "An unexpected error occurred. Please try again later."}
          </p>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
