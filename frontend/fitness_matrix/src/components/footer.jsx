import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start dark:text-teal-300">
              <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text
                  x="0"
                  y="20"
                  fill="currentColor"
                  fontSize="16"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  FitnessMatrix
                </text>
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400">
              Your journey to health and wellness starts here. Explore our programs, products, and
              tips to reach your fitness goals.
            </p>
          </div>

          <ul
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
          >
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/about"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/programs"
              >
                Programs
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
          Copyright &copy; 2023 FitnessMatrix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
