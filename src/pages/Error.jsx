import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center min-h-screen flex flex-col items-center justify-center bg-gray-400">
      <h1 className="text-3xl py-2 font-bold">Page not found</h1>
      <p className="font-serif">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="hover:text-blue-600 hover:underline font-semibold"
      >
        Go to Home
      </Link>
    </div>
  );
};
export default Error;
