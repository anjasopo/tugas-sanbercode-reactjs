import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ManageData = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
  } = state;
  const {
    handleInput,
    handleSubmit,
    handleDelete,
    handleUpdate,
    handleDescription,
    handleDescriptionTable,
    handlePrice,
    handleSize,
    handlePlatform,
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
        <h2 className="mb-5 font-bold text-2xl">Manage Data</h2>
      </div>
      <div className="container mt-10 mb-5 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-violet dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                NO
              </th>
              <th scope="col" className="py-3 px-3">
                NAMA
              </th>
              <th scope="col" className="py-3 px-3">
                KATEGORI
              </th>
              <th scope="col" className="py-3 px-3">
                Description
              </th>
              <th scope="col" className="py-3 px-3">
                Price
              </th>
              <th scope="col" className="py-3 px-3">
                Rating
              </th>
              <th scope="col" className="py-3 px-3">
                Release Year
              </th>
              <th scope="col" className="py-3 px-3">
                Size
              </th>
              <th scope="col" className="py-3 px-3">
                IS_ANDROID_APP
              </th>
              <th scope="col" className="py-3 px-3">
                IS_IOS_APP
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
                      <td scope="row" className="py-4 px-3">
                        {index + 1}
                      </td>
                      <td className="py-4 px-3">{res.name}</td>
                      <td className="py-4 px-3">{res.category}</td>
                      <td className="py-4 px-3">
                        {handleDescriptionTable(res.description)}
                      </td>
                      <td className="py-4 px-3">{handlePrice(res.price)}</td>
                      <td className="py-4 px-3">{res.rating}</td>
                      <td className="py-4 px-3">{res.release_year}</td>
                      <td className="py-4 px-3">{handleSize(res.size)}</td>
                      <td className="py-4 px-3">{res.is_android_app}</td>
                      <td className="py-4 px-3">{res.is_ios_app}</td>
                      <td>
                        <button
                          onClick={handleUpdate}
                          value={res.id}
                          className="font-medium text-white bg-yellow-200 px-2 py-1 mx-2  rounded-md"
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleDelete}
                          value={res.id}
                          className="font-medium text-white bg-red-500 px-2 py-1 rounded-md"
                        >
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

      <div className="container mx-auto rounded-md mt-20 mb-36 p-10 shadow-lg">
        <h2 className="mb-5 font-bold text-2xl">Create Data</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h6 className="mt-3">Gambar data Game</h6>
          <hr className="mb-5" />
          <label className="font-semibold">Image URL </label>
          <input
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.image_url}
            name="image_url"
            required
          />
          <h6 className="mt-3">Data Game</h6>
          <hr className="mb-3" />
          <label className="font-semibold">Name</label>
          <input
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.name}
            name="name"
            required
          />
          <label className="font-semibold">Category</label>
          <input
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.category}
            name="category"
            required
          />
          <label className="font-semibold">Description</label>
          <input
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.description}
            name="description"
            required
          />
          <label className="font-semibold">Price</label>
          <input
            type={"number"}
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.price}
            name="price"
            required
          />
          <label className="font-semibold">Rating</label>
          <input
            type={"number"}
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.rating}
            name="rating"
            required
          />
          <label className="font-semibold">Release</label>
          <input
            type={"number"}
            min="2007"
            max="2022"
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.release_year}
            name="release_year"
            required
          />
          <label className="font-semibold">Size</label>
          <input
            type={"number"}
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.size}
            name="size"
            required
          />
          <h6 className="mt-3">Jenis Perangkat</h6>
          <hr className="mb-7" />
          <label className="font-semibold">Android ?</label>
          <input
            type={"number"}
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.is_android_app}
            name="is_android_app"
            required
          />
          <label className="font-semibold">IOS ?</label>
          <input
            type={"number"}
            className="mt-2 border-2 border-zinc-200 bg-zinc-50 rounded-md mb-5 px-2 pt-2 pb-2"
            onChange={handleInput}
            value={input.is_ios_app}
            name="is_ios_app"
            required
          />

          <button className="border mt-5 bg-blue-700 border-blue-700 rounded-lg w-1/6 text-white p-2">
            <input type={"submit"} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ManageData;
