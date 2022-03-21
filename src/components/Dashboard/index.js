import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "../Dashboard/index.css";

const Dashboard = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div class="sidebar">
        <div className="container">
          <img
            src="https://livingwithict.com/images/companies/1621226798.jpg"
            style={{
              padding: "14px",
              width: "162px",
              height: "158px",
              borderRadius: "94px",
            }}
          />
        </div>
        <a class="" href="">
          Home
        </a>
        <a href="">User Setting</a>
        <div class="child">
          <a href="">Create User</a>
          <a href="">Role Setting</a>
          <a href="">Screen Setup</a>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "150px" }}
        >
          <button
            className="btn btn-primary"
            onClick={() => {
              localStorage.removeItem("token");

              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      </div>

      <div class="content">
        <h2>REACT TABLE</h2>
      </div>
    </>
  );
};

export default Dashboard;
