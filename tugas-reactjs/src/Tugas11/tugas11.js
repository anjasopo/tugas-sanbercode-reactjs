import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Tugas11 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        let data = res.data;
        console.log(data);

        let resultData = data.map((e) => {
          let { name, course, score } = e;
          return {
            name,
            course,
            score,
          };
        });

        setData([...resultData]);
      })
      .catch((error) => {});
  }, []);

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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Tugas11;
