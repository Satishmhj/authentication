import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleApi } from "../../Redux/Action/RoleApiAction";

const RoleList = () => {
  let dispatch = useDispatch();

  const roles = useSelector((state) => state.role.roles);

  useEffect(() => {
    dispatch(roleApi());
  }, []);
  return (
    <>
      {/* {screenModal && (
        <ScreenEditModal
          setScreenModal={setScreenModal}
          screenModal={screenModal}
          data={data}
        />
      )} */}
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
          {roles?.map((item) => {
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
                      //   setScreenModal(true);
                      //   setData(item);
                      // }}
                    ></i>
                    <i
                      class="bi bi-trash"
                      // onClick={() => {
                      //   dispatch(deleteScreen(id));
                      //   setTimeout(() => {
                      //     dispatch(screenApi());
                      //   }, 2000);
                      // }}
                    ></i>
                    <i class="bi bi-gear-fill"></i>
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

export default RoleList;
