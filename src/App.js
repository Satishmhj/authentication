import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginFormik from "./components/Login/LogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFormik />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
