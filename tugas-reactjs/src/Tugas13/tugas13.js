import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Tugas13 = () => {
  const [data, setData] = useState(null);

  //CRUD DATA
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });

  //Indikator
  const [fecthStatus, setFecthStatus] = useState(true);

  //Indikator
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    if (fecthStatus === true) {
      axios
        .get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data]);
        })
        .catch((error) => {});
      setFecthStatus(false);
    }
  }, [fecthStatus, setFecthStatus]);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "course") {
      setInput({ ...input, course: value });
    } else if (name === "score") {
      setInput({ ...input, score: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, course, score } = input;

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", {
          name,
          course,
          score,
        })
        .then((res) => {
          console.log(res);
          setFecthStatus(true);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          { name, course, score }
        )

        .then((res) => {
          setFecthStatus(true);
        });
    }

    setCurrentId(-1);

    setInput({
      name: "",
      course: "",
      score: "",
    });
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        setFecthStatus(true);
      });
  };

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);

    axios
      .get(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        let data = res.data;

        setInput({
          name: data.name,
          course: data.course,
          score: data.score,
        });
      });
  };

  const handleIndexScore = (s) => {
    if (s >= 80) {
      return "A";
    } else if (s >= 70 && s < 80) {
      return "B";
    } else if (s >= 60 && s < 70) {
      return "C";
    } else if (s >= 50 && s < 60) {
      return "D";
    } else {
      return "E";
    }
  };

  return (
    <>
      {/* Tabel */}
      <div class="w-1/2 mt-20 mb-5 mx-auto overflow-x-auto shadow-md sm:rounded-lg relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-violet-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                NO
              </th>
              <th scope="col" class="py-3 px-6">
                NAMA
              </th>
              <th scope="col" class="py-3 px-6">
                MATA KULIAH
              </th>
              <th scope="col" class="py-3 px-6">
                NILAI
              </th>
              <th scope="col" class="py-3 px-6">
                INDEX NILAI
              </th>
              <th scope="col" class="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td class="py-4 px-6">{res.name}</td>
                    <td class="py-4 px-6">{res.course}</td>
                    <td class="py-4 px-6">{res.score}</td>
                    <td class="py-4 px-6">{handleIndexScore(res.score)}</td>
                    <td className="py-4 px-6 flex justify-evenly">
                      <button
                        className="font-medium text-white bg-yellow-300 border-2 px-2 py-1 rounded-md border-slate-300"
                        onClick={handleEdit}
                        value={res.id}
                      >
                        Edit
                      </button>
                      <button
                        className="font-medium text-white bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300"
                        onClick={handleDelete}
                        value={res.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

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

export default Tugas13;
