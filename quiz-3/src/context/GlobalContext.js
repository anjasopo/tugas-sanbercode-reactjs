import React, { createContext, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [input, setInput] = useState({
    image_url: "",
    name: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    release_year: "",
    size: "",
    is_android_app: "",
    is_ios_app: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "image_url") {
      setInput({ ...input, image_url: value });
    } else if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "category") {
      setInput({ ...input, category: value });
    } else if (name === "description") {
      setInput({ ...input, description: value });
    } else if (name === "price") {
      setInput({ ...input, price: value });
    } else if (name === "rating") {
      setInput({ ...input, rating: value });
    } else if (name === "release_year") {
      setInput({ ...input, release_year: value });
    } else if (name === "size") {
      setInput({ ...input, size: value });
    } else if (name === "is_android_app") {
      setInput({ ...input, is_android_app: value });
    } else if (name === "is_ios_app") {
      setInput({ ...input, is_ios_app: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let {
      image_url,
      name,
      category,
      description,
      price,
      rating,
      release_year,
      size,
      is_android_app,
      is_ios_app,
    } = input;
    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/mobile-apps", {
          image_url,
          name,
          category,
          description,
          price,
          rating,
          release_year,
          size,
          is_android_app,
          is_ios_app,
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,
          {
            image_url,
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app,
          }
        )
        .then((res) => {
          setFetchStatus(true);
        });
    }
    setCurrentId(-1);
    setInput({
      image_url: "",
      name: "",
      category: "",
      description: "",
      price: "",
      rating: "",
      release_year: "",
      size: "",
      is_android_app: "",
      is_ios_app: "",
    });
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
      });
  };

  const handleUpdate = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);

    axios
      .get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
      .then((res) => {
        let data = res.data;
        setInput({
          image_url: data.image_url,
          name: data.name,
          category: data.category,
          description: data.description,
          price: data.price,
          rating: data.rating,
          release_year: data.release_year,
          size: data.size,
          is_android_app: data.is_android_app,
          is_ios_app: data.is_ios_app,
        });
      });
  };

  let fetchData = () => {
    axios
      .get("https://backendexample.sanbercloud.com/api/mobile-apps")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
    setFetchStatus(false);
  };

  const handleDescription = (description) => {
    if (description.length > 15) {
      const desc = description.slice(0, 170).concat("...");
      return desc;
    } else {
      return description;
    }
  };

  const handleDescriptionTable = (description) => {
    if (description.length > 15) {
      const desc = description.slice(0, 20).concat("...");
      return desc;
    } else {
      return description;
    }
  };

  const handlePrice = (price) => {
    if (price === 0) {
      return "FREE";
    } else {
      var reverse = price.toString().split("").reverse().join("");
      var ribuan = reverse.match(/\d{1,3}/g);
      return "Rp " + ribuan.join(".").split("").reverse().join("") + ",-";
    }
  };

  const handleSize = (size) => {
    if (size >= 1000) {
      return parseFloat((size / 1000).toFixed(1)) + " GB";
    } else {
      return size + "MB";
    }
  };

  const handlePlatform = (is_android_app, is_ios_app) => {
    if (is_android_app && is_ios_app === 1) {
      return ", Android & IOS";
    } else if (is_android_app === 1) {
      return ", Android";
    } else if (is_ios_app === 1) {
      return ", IOS";
    }
  };

  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
  };

  let handleFunction = {
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
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
