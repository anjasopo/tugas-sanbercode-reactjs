import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Tugas7 from "./Tugas7/tugas7";
import Tugas15List from "./Tugas15/Tugas15List";
import Tugas15Form from "./Tugas15/Tugas15Form";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Tugas7 />} />
            <Route path="/tugas15" element={<Tugas15List />} />
            <Route path="/create" element={<Tugas15Form />} />
            <Route path="/edit/:IdData" element={<Tugas15Form />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
