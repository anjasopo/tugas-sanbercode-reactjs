import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const DashboardForm = () => {
  let { idData } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;

  const { handleInput, handleSubmit } = handleFunction;

  useEffect(() => {
    if (idData !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
          let data = res.data;

          setInput({
            title: data.title,
            job_type: data.job_type,
            job_qualification: data.job_qualification,
            job_description: data.job_description,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        });
    }
  }, []);

  return (
    <div className="container mx-auto rounded-md mb-36 p-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="mb-5 font-bold text-2xl">Job Information</h2>
        <hr className="mb-3" />
        <label>Title</label>
        <input
          onChange={handleInput}
          value={input.title}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="title"
          type="text"
          required
        />
        <label>Type</label>
        <input
          onChange={handleInput}
          value={input.job_type}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="job_type"
          required
        />
        <label>Description</label>
        <input
          onChange={handleInput}
          value={input.job_description}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="job_description"
          type="text"
          required
        />
        <label>Tenure</label>
        <input
          onChange={handleInput}
          value={input.job_tenure}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="job_tenure"
          required
        />
        <label>Qualification</label>
        <input
          onChange={handleInput}
          value={input.job_qualification}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="job_qualification"
          type="text"
          required
        />
        <label>Status</label>
        <select
          onChange={handleInput}
          value={input.job_status}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="job_status"
          required
        >
          <option value="" disabled hidden>
            Select Here
          </option>
          <option value="1">Open</option>
          <option value="0">Close</option>
        </select>
        <h2 className="mt-20 mb-5 font-bold text-2xl">Company Information</h2>
        <hr className="mb-7" />
        <label>Company Image</label>
        <input
          onChange={handleInput}
          value={input.company_image_url}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="company_image_url"
          type="text"
          required
        />
        <label>Company Name</label>
        <input
          onChange={handleInput}
          value={input.company_name}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="company_name"
          type="text"
          required
        />
        <label>Company City</label>
        <input
          onChange={handleInput}
          value={input.company_city}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="company_city"
          type="text"
          required
        />
        <label>Minimum Salary</label>
        <input
          onChange={handleInput}
          value={input.salary_min}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="salary_min"
          type="number"
          required
        />
        <label>Maximum Salary</label>
        <input
          onChange={handleInput}
          value={input.salary_max}
          className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
          name="salary_max"
          type="number"
          required
        />
        <div className="py-3 text-left">
          <button
            type={"submit"}
            className="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardForm;
