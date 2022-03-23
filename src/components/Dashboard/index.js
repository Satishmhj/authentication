import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import Navigation from "./Navigation";

const Dashboard = () => {
  let navigate = useNavigate();
  console.log("asdf");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Navigation />
      <div class="content">
        <div >
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
