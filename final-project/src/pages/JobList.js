import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
  const [data, setData] = useState(null);

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect((res) => {
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

  const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(search);
    let fetchData = async () => {
      try {
        setDisplay(true);
        let res = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy`
        );
        let dataJob = res.data.data;
        console.log(dataJob);

        let searchData = dataJob.filter((res) => {
          return Object.values(res)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });

        console.log(searchData);

        setDisplay(false);
        setData([...searchData]);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  };

  return (
    <>
      <div>
        <h1 className="font-bold mb-20 text-2xl p-10 lg:p-0">
          Lowongan Tersedia
        </h1>
      </div>

      {/* Search */}
      <div className="flex flex-row mb-1 sm:mb-0 justify-center w-full">
        <div className="w-full md:w-1/2 h-fit mx-auto shadow p-5 rounded-lg bg-white mb-20">
          <div className="pt-2 relative mx-auto text-gray-600">
            <form onSubmit={handleSearch} flex items-center>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  onChange={handleChangeSearch}
                  value={search}
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
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

export default JobList;
