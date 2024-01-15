import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser";
import Winner from "./pages/Winner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchUser" element={<SearchUser />} />
      <Route path="/searchUser/winner" element={<Winner />} />
    </Routes>
  );
}

export default App;
