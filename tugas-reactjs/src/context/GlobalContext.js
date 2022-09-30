import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

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
  //Submit
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
          navigate("/tugas15");
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          { name, course, score }
        )

        .then((res) => {
          setFecthStatus(true);
          navigate("/tugas15");
        });
    }

    setCurrentId(-1);

    setInput({
      name: "",
      course: "",
      score: "",
    });
  };
  //Delete
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
  //Edit
  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);
    navigate(`/edit/${idData}`);
  };
  //ConvertScore
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

  let fetchData = () => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
    setFecthStatus(false);
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    fecthStatus,
    setFecthStatus,
    currentId,
    setCurrentId,
  };

  let handleFunction = {
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleIndexScore,
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
