import { login } from "@/api/adminApi";
import { loginWorker } from "@/api/workerApi";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Cookies from "js-cookie";

const Form = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState<string | { message: string }>(""); // Set initial state as an empty string
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [workerData, setWorkerData] = useState({
    username: "",
    password: "",
  });
  // console.log(workerData, "workerData");
  const [res, setRes] = useState<any>();
  const [isWorker, setIsWorker] = useState(false);
  // console.log(res, "res");
  const handleSubmit = async () => {
    try {
      const res = await login(userData); // Use userData for login
      if (!res) {
        setError("Incorrect Username or Password.");
      } else {
        setRes(res);
        const adminId = res?.data?._id;
        Cookies.set("adminId", adminId);
        setLoggedIn(true); // Set loggedIn to true upon successful login
      }
    } catch (error: any) {
      setError(error); // Set error state if login fails
    }
  };
  const handleWorkerSubmit = async () => {
    try {
      const res = await loginWorker(workerData); // Use userData for login
      if (!res) {
        setError("Incorrect Username or Password.");
      } else {
        setRes(res);
        setLoggedIn(true);
        const workerId = res?.data?._id; // Get the worker's ID from the response
        Cookies.set("workerId", workerId); // Set loggedIn to true upon successful login
      }
    } catch (error: any) {
      setError(error); // Set error state if login fails
    }
  };

  if (loggedIn && res?.data?.role === "admin") {
    // Redirect to home page if logged in
    return <Redirect to="/home" />;
  }

  if (loggedIn && res?.data?.role === "worker") {
    // Redirect to home page if logged in
    return <Redirect to="/phc-form" />;
  }

  return (
    <Wrapper>
      <h1 style={{ textAlign: "center", fontSize: "22px", fontWeight: 600 }}>
        Login Form
      </h1>
      {isWorker ? (
        <div className="container mx-auto">
          <form className="">
            <div className="flex flex-col my-4 text-center">
              <input
                type="text"
                id="LoginFormUsernameField"
                value={workerData.username} // Bind value to userData.username
                onChange={(e) =>
                  setWorkerData({ ...workerData, username: e.target.value })
                } // Update username in userData state
                className="w-3/4 font-normal placeholder:text-slate-600 text-slate-600 border-2 border-indigo-400 rounded-md focus:ring-2 focus:ring-indigo-400 transition outline-none bg-transparent p-2 mx-auto"
                placeholder="Username"
              />
            </div>
            <div className="flex my-4 flex-col text-center">
              <input
                type="password"
                id="LoginFormPasswordField"
                value={workerData.password} // Bind value to userData.password
                onChange={(e) =>
                  setWorkerData({ ...workerData, password: e.target.value })
                } // Update password in userData state
                className="w-3/4 font-normal placeholder:text-slate-600 text-slate-600 border-2 border-indigo-400 rounded-md ease-in-out focus:ring-2 focus:ring-indigo-400 transition outline-none bg-transparent p-2 mx-auto"
                placeholder="Password"
              />
            </div>
            {error && (
              <p style={{ color: "red", textAlign: "center" }}>
                {typeof error === "object" ? error.message : error}
              </p>
            )}

            <div className="flex my-3 mt-6">
              <button
                type="button"
                onClick={handleWorkerSubmit}
                className="mx-auto bg-indigo-500 rounded-md text-lg hover:bg-indigo-600 transition ease-in text-white py-2 px-4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="container mx-auto">
          <form className="">
            <div className="flex flex-col my-4 text-center">
              <input
                type="text"
                id="LoginFormUsernameField"
                value={userData.username} // Bind value to userData.username
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                } // Update username in userData state
                className="w-3/4 font-normal placeholder:text-slate-600 text-slate-600 border-2 border-indigo-400 rounded-md focus:ring-2 focus:ring-indigo-400 transition outline-none bg-transparent p-2 mx-auto"
                placeholder="Username"
              />
            </div>
            <div className="flex my-4 flex-col text-center">
              <input
                type="password"
                id="LoginFormPasswordField"
                value={userData.password} // Bind value to userData.password
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                } // Update password in userData state
                className="w-3/4 font-normal placeholder:text-slate-600 text-slate-600 border-2 border-indigo-400 rounded-md ease-in-out focus:ring-2 focus:ring-indigo-400 transition outline-none bg-transparent p-2 mx-auto"
                placeholder="Password"
              />
            </div>
            {error && (
              <p style={{ color: "red", textAlign: "center" }}>
                {typeof error === "object" ? error.message : error}
              </p>
            )}

            <div className="flex my-3 mt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="mx-auto bg-indigo-500 rounded-md text-lg hover:bg-indigo-600 transition ease-in text-white py-2 px-4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
      {isWorker ? (
        <button
          style={{
            background: "#5f5ff7",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => setIsWorker(false)}
        >
          Admin Login
        </button>
      ) : (
        <button
          style={{
            background: "#5f5ff7",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => setIsWorker(true)}
        >
          Worker Login
        </button>
      )}
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  background: #d9d9d9;
  padding: 15px;
  margin: 10%;
  border-radius: 10px;
  padding-top: 50px;
`;
