import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ManageData from "./components/ManageData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/manage-data" element={<ManageData />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
