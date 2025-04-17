import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-6">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't seem to exist.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Go Back Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
