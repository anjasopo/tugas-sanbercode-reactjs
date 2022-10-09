import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const DashboardJobList = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
  } = state;

  const {
    handleDelete,
    handleUpdate,
    handleDescTable,
    handlePrice,
    fetchData,
  } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  }, [fetchStatus, setFetchStatus, fetchData]);
  return (
    <>
      <div className="container mt-10 mb-5 mx-auto overflow-x-auto relative">
        <h2 className="mb-5 font-bold text-2xl">List Data</h2>
      </div>
      <div className="container mt-10 mb-5 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-violet dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                NO
              </th>
              <th scope="col" className="py-3 px-3">
                Title
              </th>
              <th scope="col" className="py-3 px-3">
                Type
              </th>
              <th scope="col" className="py-3 px-3">
                Qualification
              </th>
              <th scope="col" className="py-3 px-3">
                Description
              </th>
              <th scope="col" className="py-3 px-3">
                Tenure
              </th>
              <th scope="col" className="py-3 px-3">
                Status
              </th>
              <th scope="col" className="py-3 px-3">
                Company Name
              </th>
              <th scope="col" className="py-3 px-3">
                Image
              </th>
              <th scope="col" className="py-3 px-3">
                City
              </th>
              <th scope="col" className="py-3 px-3">
                Salary
              </th>
              <th scope="col" className="py-3 px-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-3">{index + 1}</td>
                      <td className="py-4 px-3">
                        {res.title === null ? " " : res.title}
                      </td>
                      <td className="py-4 px-3">
                        {res.job_type === null ? " " : res.job_type}
                      </td>
                      <td className="py-4 px-3">
                        {handleDescTable(
                          res.job_qualification === null
                            ? " "
                            : res.job_qualification
                        )}
                      </td>
                      <td className="py-4 px-3">
                        {handleDescTable(
                          res.job_description === null
                            ? " "
                            : res.job_description
                        )}
                      </td>
                      <td className="py-4 px-3">
                        {res.job_tenure === null ? " " : res.job_tenure}
                      </td>
                      <td className="py-4 px-3">
                        <span
                          className={
                            res.job_status === 1
                              ? "relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight"
                              : "relative inline-block px-3 py-1  font-semibold text-red-900 leading-tight"
                          }
                        >
                          <span
                            aria-hidden="true"
                            className={
                              res.job_status === 1
                                ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                : "absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            }
                          ></span>
                          <span className="relative">
                            {res.job_status === 1 ? "Open" : "Closed"}
                          </span>
                        </span>
                      </td>
                      <td className="py-4 px-3">
                        {res.company_name === null ? " " : res.company_name}
                      </td>
                      <td className="py-4 px-3 border-b border-gray-200 text-center  bg-white text-sm">
                        <img
                          src={
                            res.company_image_url === null
                              ? " "
                              : res.company_image_url
                          }
                          alt=""
                        />
                      </td>
                      <td className="py-4 px-3">
                        {res.company_city === null ? " " : res.company_city}
                      </td>
                      <td className="py-4 px-3">
                        <p>
                          {handlePrice(
                            res.salary_min === null ? " " : res.salary_min
                          ) +
                            "-" +
                            handlePrice(
                              res.salary_max === null ? " " : res.salary_max
                            )}
                        </p>
                      </td>
                      <td>
                        <button
                          onClick={handleUpdate}
                          value={res.id}
                          className="font-medium text-white bg-yellow-200 px-2 py-1 mx-2  rounded-md"
                        >
                          {" "}
                          Edit
                        </button>
                        <button
                          onClick={handleDelete}
                          value={res.id}
                          className="font-medium text-white bg-red-500 px-2 py-1 rounded-md"
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardJobList;
