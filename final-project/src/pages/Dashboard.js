import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy`
        );
        setData(res.data.data);
      } catch (error) {
        alert(error);
      }
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, []);

  function ucapan() {
    const today = new Date();
    let h = today.getHours();
    if (h >= 4 && h < 11) {
      return "Good Morning";
    } else if (h >= 11 && h < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  return (
    <>
      <div className="container mt-10 mb-5 mx-auto overflow-x-auto relative">
        <h2 className="mb-5 font-bold text-2xl">Hi! {ucapan()}</h2>
      </div>
      <div className="flex flex-col w-full md:space-y-4">
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="flex my-6 items-center w-full space-y-4  flex-col gap-3">
            <div className="w-full">
              <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                <Link
                  to={"/dashboard/list-job-vacancy"}
                  className="w-full h-full block"
                >
                  <div className="flex items-center justify-between px-4 py-6 space-x-4">
                    <div className="flex items-center">
                      <p className="text-xl text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                        Vacancy Posted
                      </p>
                    </div>
                    <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-3xl">
                      {data !== null && data.length}
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100">
                    <div className="w-2/5 h-full text-center text-xs text-white bg-green-400"></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <div className="w-1/2">
                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    {data !== null &&
                      data.filter((x) => x.job_status === 1).length}
                  </p>
                  <p className="text-gray-400 text-sm">Vacancy Open</p>
                  <span className="rounded-full absolute p-4 bg-green-500 top-2 right-4"></span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    {data !== null &&
                      data.filter((x) => x.job_status !== 1).length}
                  </p>
                  <p className="text-gray-400 text-sm">Vacancy Closed</p>
                  <span className="rounded-full absolute p-4 bg-red-600 top-2 right-4"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
