import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { Api } from "../../../Api";
import { roleApi } from "../../Redux/Action/RoleApiAction";
import { userApi } from "../../Redux/Action/UserApiAction";

const UserRoleMapping = () => {
  const [userID, setUserID] = useState();
  const [roleId, setRoleId] = useState();
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

  const handleChangeUser = (options) => {
    setUserID(options.value);
    console.log(options.value);
  };

  const handleChangeRole = (options) => {
    setRoleId(options.value);
  };

  console.log(roleId);
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
                value: items.id,
                label: items.name,
              };
            })}
            onChange={handleChangeUser}
          />
        </div>
        <div className="text-center">
          <b>Role</b>
          <ReactSelect
            options={roles?.map((items) => {
              return {
                value: items.id,
                label: items.name,
              };
            })}
            onChange={handleChangeRole}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-danger mt-5 "
          onClick={async () => {
            let res = await Api("user/role/map", "POST", {
              userId: userID,
              roleId: roleId,
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
