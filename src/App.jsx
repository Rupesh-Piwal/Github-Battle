import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserInput from "./components/UserInput";
import BattleGround from "./pages/BattleGround";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userInput" element={<UserInput />} />
      <Route path="/userInput/battleground" element={<BattleGround />} />
      <Route path="/userInput/battleground/winner" element={<BattleGround />} />

    </Routes>
  );
}

export default App;
