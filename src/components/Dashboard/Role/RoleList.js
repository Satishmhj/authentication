import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleApi, roleDelete } from "../../Redux/Action/RoleApiAction";
import RoleEditModal from "./RoleEditModal";

const RoleList = () => {
  const [roleEdit, setRoleEdit] = useState(false);
  const [roledata, setRoledata] = useState("");

  let dispatch = useDispatch();

  const roles = useSelector((state) => state.role.roles);

  useEffect(() => {
    dispatch(roleApi());
  }, []);
  return (
    <>
      {roleEdit && (
        <RoleEditModal
          roleEdit={roleEdit}
          setRoleEdit={setRoleEdit}
          roledata={roledata}
        />
      )}

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
                      onClick={() => {
                        setRoleEdit(true);
                        setRoledata(item);
                      }}
                    ></i>
                    <i
                      class="bi bi-trash"
                      onClick={() => {
                        dispatch(roleDelete(id));
                        setTimeout(() => {
                          dispatch(roleApi());
                        }, 2000);
                      }}
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
