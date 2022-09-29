import { Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Login from "./containers/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
