import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  const [data, setData] = useState(null);

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        setDisplay(true);
        let res = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy`
        );
        setData(res.data.data);
        setDisplay(false);
      } catch (error) {
        alert(error);
      }
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, []);

  console.log(data);

  const handleText = (param) => {
    if (param === null) {
      return "";
    } else {
      return param.slice(0, 150) + "...";
    }
  };

  return (
    <>
      <Hero />

      <div>
        <h1 className="font-bold mb-20 text-2xl p-10 lg:p-0">
          Lowongan Tersedia
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-start">
        {display && (
          <>
            <div
              role="status"
              className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="flex items-center mt-4 space-x-3">
                <svg
                  className="w-14 h-14 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="flex items-center mt-4 space-x-3">
                <svg
                  className="w-14 h-14 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )}

        {data !== null &&
          data.map((res) => {
            return (
              <Link
                to={`/list-job-vacancy/${res.id}`}
                key={res.id}
                className="flex flex-col overflow-hidden shadow-lg rounded-lg h-72 w-60 md:w-80 cursor-pointer"
              >
                <div className="grow bg-white dark:bg-gray-800 w-full p-4 flex flex-col">
                  <div className="w-full flex flex-col grow">
                    <p className="text-indigo-500 text-md font-medium">
                      {res.job_type}
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      {res.title}
                    </p>
                    <p className="grow text-gray-400 dark:text-gray-300 font-light text-md">
                      {handleText(res.job_description)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <a href="#" className="block relative">
                      <img
                        alt="profil"
                        src={res.company_image_url}
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-gray-800 dark:text-white">
                        {res.company_name}
                      </p>
                      <p className="text-gray-400 dark:text-gray-300">
                        {res.company_city}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Home;
