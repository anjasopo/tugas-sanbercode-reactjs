import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const Tugas15Form = () => {
  let { IdData } = useParams();

  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    setData,
    input,
    setInput,
    fecthStatus,
    setFecthStatus,
    currentId,
    setCurrentId,
  } = state;
  const {
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleIndexScore,
    fetchData,
  } = handleFunction;

  useEffect(() => {
    if (IdData !== undefined) {
      axios
        .get(
          `https://backendexample.sanbercloud.com/api/student-scores/${IdData}`
        )
        .then((res) => {
          let data = res.data;

          setInput({
            name: data.name,
            course: data.course,
            score: data.score,
          });
        });
    }
  }, []);

  return (
    <>
      {/* Form Data */}
      <div className="w-1/2 mt-10 mx-auto relative">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Nama : </label>
          <input
            className="border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5"
            onChange={handleInput}
            value={input.name}
            name="name"
            required
          />
          <label>MK : </label>
          <input
            className="border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5"
            onChange={handleInput}
            value={input.course}
            name="course"
            required
          />
          <label>Nilai : </label>
          <input
            className="border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5"
            onChange={handleInput}
            value={input.score}
            name="score"
            required
          />
          <button className="border mt-5 bg-blue-700 rounded-lg w-1/6 text-white p-2">
            <input type={"submit"} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Tugas15Form;
