import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-60px)] text-center dark:text-white dark:bg-black">
      <h3 className="py-8 text-xl font-semibold">
        Sorry, this page isn't available.
      </h3>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go back to Instagram
        </span>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
