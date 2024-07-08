/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";

const Error = () => {
    return (
      <>
        <section className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center p-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-6xl font-bold text-red-600">404</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Sorry! Page not found</h3>
            <p className="text-gray-600 mt-4">
              Oops! It seems like the page you're trying to access doesn't exist.
              If you believe there's an issue, feel free to report it, and we'll look into it.
            </p>
            
            <div className="flex justify-center gap-6 mt-8">
              
                <NavLink to="/">
                <button className="py-3 px-6 text-xl font-medium text-white rounded-md bg-orange-500 hover:bg-blue-600 transition duration-300">
                  Return Home
                </button>
                </NavLink>
              
  
                <NavLink to="/Contact">
                <button className="py-3 px-6 text-xl font-medium text-white rounded-md bg-orange-500 hover:bg-blue-600 transition duration-300">
                  Report Problem
                </button>
                </NavLink>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Error;
  