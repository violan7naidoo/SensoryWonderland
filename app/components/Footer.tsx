import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">Explore</h2>
            <ul className="list-none">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Nike"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Nike
                </a>
              </li>
              <li>
                <a
                  href="/Jordan"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Jordan
                </a>
              </li>
              <li>
                <a
                  href="/Lacoste"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Lacoste
                </a>
              </li>
              <li>
                <a
                  href="/All"
                  className="hover:text-gray-400 transition duration-200"
                >
                  All
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 w-full sm:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">
              Connect With Us - 071 845 4828{" "}
            </h2>
            <ul className="list-none">
              {/* Add your social media or contact links here */}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Grey Son's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
