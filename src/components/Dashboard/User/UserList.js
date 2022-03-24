import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser, userApi } from "../../Redux/Action/UserApiAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserEditModal from "./UserEditModal";


const UserList = (props) => {
  const [edit, setEdit] = useState(false);
  const [pass, setPass] = useState("");

  // const{}
  const userList = useSelector((state) => state.user.userList);
  const userDelete = useSelector((state) => state.user.UserDelete);

  const dispatch = useDispatch();
  console.log(userList);

  useEffect(() => {
    dispatch(userApi());
  }, []);
  

  return (
    <>
    {
      edit && <UserEditModal setEdit={setEdit} edit={edit} pass={pass}/>
    }
     
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            const { createdAt, createdBy, email, id, name, updateAt } = item;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <div className="d-flex justify-content-evenly">
                    <i
                      class="bi bi-pencil-square"
                      onClick={() => {
                        setEdit(true);
                        setPass(item)
                      }}
                    ></i>
                    <i
                      class="bi bi-trash"
                      onClick={() => {
                        dispatch(deleteUser(id));
                        console.log(id);
                        // console.log("trash");
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

export default UserList;
