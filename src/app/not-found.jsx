"use client";

import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="max-h-screen bg-base-100 flex items-center justify-center my-10  px-4 py-12">
      <div className="max-w-lg w-full text-center">
        <div className=" mb-8">
          <h1 className="text-[180px] md:text-[220px] font-bold text-base-300 leading-none select-none">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-base-content mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-base-content/70 text-lg mb-10 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="btn btn-primary btn-lg gap-3 shadow-md hover:scale-105 transition-all active:scale-95"
          >
            <FaHome className="text-xl" />
            Back to Home
          </button>

          <button
            onClick={() => router.back()}
            className="btn btn-outline btn-lg gap-3 hover:bg-base-200"
          >
            <FaSearch className="text-xl" />
            Go Back
          </button>
        </div>

        <div className="mt-16 text-xs text-base-content/40 flex justify-center gap-8">
          <div>¯\_(ツ)_/¯</div>
          <div>Error Code: 404</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
