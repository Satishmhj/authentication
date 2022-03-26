import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteScreen, screenApi } from "../../Redux/Action/ScreenApiAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScreenEditModal from "./ScreenEditModal";

const ScreenList = () => {
  const [screenModal, setScreenModal] = useState(false);
  const [data, setData] = useState("");

  const screens = useSelector((state) => state.screen.screens);

  const dispatch = useDispatch();
  console.log(screens);

  useEffect(() => {
    dispatch(screenApi());
  }, []);

  return (
    <>
      {screenModal && (
        <ScreenEditModal
          setScreenModal={setScreenModal}
          screenModal={screenModal}
          data={data}
        />
      )}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Screen Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {screens?.map((item) => {
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
                      onClick={() => {
                        setScreenModal(true);
                        setData(item);
                      }}
                    ></i>
                    <i
                      class="bi bi-trash"
                      onClick={() => {
                        dispatch(deleteScreen(id));
                        setTimeout(() => {
                          dispatch(screenApi());
                        }, 2000);
                      }}
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
