import { useState } from "react";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (event) => {
    setIsClicked(!isClicked);
    console.log("button is clicked!", isClicked);
  };

  return (
    <>
      <nav className="fixed w-full z-10">
        <div>
          <div className="p-3 bg-custom-gray">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-solid-bg"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-solid-bg"
                aria-expanded="false"
                onClick={handleSubmit}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className={
                  "w-full md:block md:w-auto " + (isClicked ? "" : "hidden")
                }
                id="navbar-solid-bg"
              >
                <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rjse-about-me"
                      className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent "
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rjse-projects"
                      className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rjse-contact"
                      className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
