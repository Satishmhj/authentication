import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { Api } from "../../../Api";
import { roleApi } from "../../Redux/Action/RoleApiAction";
import { userApi } from "../../Redux/Action/UserApiAction";

const UserRoleMapping = () => {
  const userList = useSelector((state) => state.user.userList);
  console.log(userList.id);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(userApi());
  }, []);

  const roles = useSelector((state) => state.role.roles);
  useEffect(() => {
    dispatch(roleApi());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <b className="display-4">User Role Mapping</b>
      </div>

      <div className="d-flex justify-content-evenly mt-5">
        <div className="text-center">
          <b>User</b>
          <ReactSelect
            options={userList?.map((items) => {
              return {
                value: items.name,
                label: items.name,
              };
            })}
          />
        </div>
        <div className="text-center">
          <b>Role</b>
          <ReactSelect
            options={roles?.map((items) => {
              return {
                value: items.name,
                label: items.name,
              };
            })}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-danger mt-5 "
          onClick={async () => {
            let res = await Api("user/role/map", "POST", {
              userId: "",
              roleId: "",
            });
          }}
        >
          MapUserToRole
        </button>
      </div>
    </>
  );
};

export default UserRoleMapping;
