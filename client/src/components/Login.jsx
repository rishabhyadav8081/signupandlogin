import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./app.css";
import Axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    
    Axios.post("http://localhost:5001/auth/login", {
      email,
      password,
    })
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          nevigate("/home");
          toast.success("Logged in successfully", { position: "top-center" });
        } else if (response.data.message === "user not registered!") {
          toast.error("user not registered", { position: "top-center" });
        } else if (response.data.message === "password or email is incorect!") {
          toast.error("password or email is incorect!", {
            position: "top-center",
          });
        } else if (response.data.message === "enter full details") {
          toast.error("enter full details", { position: "top-center" });
        } else if (response.code==="ERR_NETWORK") {
          toast.error("ERR_NETWORK", { position: "top-center" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      <div className="sign-up-container">
        <form action="" className="sign-up-form" onSubmit={submit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="Password" >Password</label>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="button">
            Login
          </button>
          <p>
            don't have an account! <Link to="/">signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
