import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "../Dashboard/index.css";

const Navigation = () => {
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
        <div className="m-4">
          <div className="btn btn-lg btn-primary d-flex justify-content-center ">
            Home
          </div>
          <div class="dropdown d-flex justify-content-center mt-2 ">
            <button
              class="btn btn-lg btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User Setting
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/user/create");
                  }}
                >
                  Create User
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/user/list");
                  }}
                >
                  UserList
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/user/userRoleMapping");
                  }}
                >
                  userRoleMapping
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown d-flex justify-content-center mt-2 ">
            <button
              class="btn btn-lg btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Role Setting
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/role/create");
                  }}
                >
                  Create Role
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/role/list");
                  }}
                >
                  Role List
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown d-flex justify-content-center mt-2 ">
            <button
              class="btn btn-lg btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ScreenSetting
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class="dropdown-item "
                  onClick={() => {
                    navigate("/dashboard/screen/create");
                  }}
                >
                  Create Screen
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/screen/list");
                  }}
                >
                  Screen List
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown d-flex justify-content-center mt-2 ">
            <button
              class="btn btn-lg btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class="dropdown-item "
                  onClick={() => {
                    navigate("/dashboard/products/add");
                  }}
                >
                  Add Products
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    navigate("/dashboard/products/list");
                  }}
                >
                  products list
                </a>
              </li>
            </ul>
          </div>
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
    </>
  );
};

export default Navigation;
