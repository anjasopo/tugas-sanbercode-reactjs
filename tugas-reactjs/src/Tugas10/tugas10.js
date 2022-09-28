import React from "react";

const Tugas10 = () => {
  return (
    <>
      <div class="w-1/2 mb-5 mx-auto overflow-x-auto shadow-md sm:rounded-lg relative">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="py-4 px-6">John</td>
              <td class="py-4 px-6">Algoritma</td>
              <td class="py-4 px-6">80</td>
              <td class="py-4 px-6">A</td>
              <td className="py-4 px-6 flex justify-evenly">
                <button className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">
                  Edit
                </button>
                <button className="font-medium text-white bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="py-4 px-6">Doe</td>
              <td class="py-4 px-6">Matematika</td>
              <td class="py-4 px-6">70</td>
              <td class="py-4 px-6">B</td>
              <td className="py-4 px-6 flex justify-evenly">
                <button className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">
                  Edit
                </button>
                <button className="font-medium text-white bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="py-4 px-6">Frank</td>
              <td class="py-4 px-6">Kalkulus</td>
              <td class="py-4 px-6">60</td>
              <td class="py-4 px-6">C</td>
              <td className="py-4 px-6 flex justify-evenly">
                <button className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">
                  Edit
                </button>
                <button className="font-medium text-white bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </th>
              <td class="py-4 px-6">Jason</td>
              <td class="py-4 px-6">Basis Data</td>
              <td class="py-4 px-6">90</td>
              <td class="py-4 px-6">A</td>
              <td className="py-4 px-6 flex justify-evenly">
                <button className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">
                  Edit
                </button>
                <button className="font-medium text-white bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tugas10;
