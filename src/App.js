import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recorded from "./pages/Recorded";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file/*" element={<Recorded />} />
      </Routes>
    </>
  );
}

export default App;
