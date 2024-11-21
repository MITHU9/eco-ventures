import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 relative overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="absolute top-0 text-white text-xl animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 5}s`,
          }}
        >
          ❄
        </div>
      ))}
      <h1
        className="text-4xl py-2 font-bold text-blue-800"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        404
      </h1>

      <h1
        className="text-4xl py-2 font-bold text-blue-800"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Page Not Found
      </h1>
      <p
        className="font-serif text-blue-700 text-lg my-4"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="text-lg hover:text-blue-200 hover:underline font-semibold text-blue-900 bg-blue-400 px-4 py-2 rounded-md"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
