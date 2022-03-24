import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { screenApi } from "../../Redux/Action/ScreenApiAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ScreenList = () => {
  const dispatch = useDispatch();

  const screens = useSelector((state) => state.screen.screens);

  console.log(screens);

  useEffect(() => {
    dispatch(screenApi());
  }, []);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Role Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {screens.map((item) => {
            const { createdAt, description, id, name, updateAt } = item;

            return (
              <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                  <div className="d-flex justify-content-evenly">
                    <i
                      class="bi bi-pencil-square"
                      // onClick={() => {
                      //   setEdit(true);
                      //   setPass(item)
                      // }}
                    ></i>
                    <i
                      class="bi bi-trash"
                      // onClick={() => {
                      //   dispatch(deleteUser(id));
                      //   console.log(id);
                      //   // console.log("trash");
                      // }}
                    ></i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ScreenList;
