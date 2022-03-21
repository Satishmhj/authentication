import React from "react";
import "../Dashboard/index.css";

const Dashboard = () => {
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
      </div>

      <div class="content">
        <h2>REACT TABLE</h2>
      </div>
    </>
  );
};

export default Dashboard;
