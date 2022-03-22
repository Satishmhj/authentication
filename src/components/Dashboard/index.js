import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import Navigation from "./Navigation";
import UserForm from "./User/UserForm";
import UserList from "./User/UserList";

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
        <div className="d-flex justify-content-center display-4 mt-3">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
