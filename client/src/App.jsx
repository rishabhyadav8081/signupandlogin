import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
// import {ToastContainer} from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>      
          <Route path="/" element={<Signup />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
