import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import TikTokIcon from "../../components/ui/TikTok";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2 text-lg font-semibold text-primary">
              Dharma Beauty
            </h2>
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
                  href="/Pigmentation-Serum"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Pigmentation Serum
                </a>
              </li>
              <li>
                <a
                  href="/L-Glutathione-Scrub"
                  className="hover:text-gray-400 transition duration-200"
                >
                  L-Glutathione Scrub
                </a>
              </li>
              <li>
                <a
                  href="/Kojic-Scrub"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Kojic Scrub
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <h2 className="text-xl font-bold mb-2">Connect With Us </h2>
            <ul className="list-none">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Call Shiv : 067 089 2781
                </a>
              </li>
              <li></li>
              <li className=" flex items-center mx-auto mt-2 ">
                <span className="text-xl mr-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-200"
                  >
                    <FaFacebook />
                  </a>
                </span>
                <span className="text-xl mr-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-200"
                  >
                    <TikTokIcon />
                  </a>
                </span>
                <span className="text-xl">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-200"
                  >
                    <FaInstagram />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4">
          <a
            href="https://ve3z.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            Design by ve3z
          </a>
          <p className="text-sm text-gray-500">
            <br />
            &copy; {new Date().getFullYear()} Dharma Beauty. All rights
            reserved.
          </p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
