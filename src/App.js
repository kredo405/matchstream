import Velcome from "./pages/Velcome";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Match from "./pages/Match";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Velcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </>
  )
}


export default App;
