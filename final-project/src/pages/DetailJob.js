import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailJob = () => {
  let { idData } = useParams();

  const [dataJob, setDataJob] = useState(null);

  const handlePrice = (price) => {
    if (price === 0) {
      return "FREE";
    } else {
      var reverse = price.toString().split("").reverse().join("");
      var ribuan = reverse.match(/\d{1,3}/g);
      return "Rp " + ribuan.join(".").split("").reverse().join("");
    }
  };

  useEffect(() => {
    if (idData !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
          setDataJob(res.data);
        });
    }
  }, []);

  return (
    <>
      {dataJob !== null && (
        <>
          <div className="m-10 lg:mt-24 lg:mb-6 lg:mx-28">
            <h3 className="text-4xl leading-6 font-medium text-gray-900">
              Job Information
            </h3>
          </div>
          <div className="bg-white shadow-xl border-2 mx-10 lg:mx-24 lg:p-8 overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 flex flex-row-reverse justify-between sm:px-6">
              <img src={dataJob.company_image_url} className="w-28 md:w-32" />
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl leading-6 font-medium text-gray-900">
                  {dataJob.company_name}
                </h3>
                <p className="mt-3 max-w-2xl text-xl text-gray-500">
                  {dataJob.title}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataJob.job_description}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataJob.title}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Qualification
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataJob.job_qualification}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataJob.company_city}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Tenure
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataJob.job_tenure}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataJob.job_type}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Salary Range
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {handlePrice(
                      dataJob.salary_min === null ? " " : dataJob.salary_min
                    ) +
                      "-" +
                      handlePrice(
                        dataJob.salary_max === null ? " " : dataJob.salary_max
                      )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailJob;
